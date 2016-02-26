(function() {
  'use strict';
  
  // Adapted from: http://www.ng-newsletter.com/posts/d3-on-angular.html
  angular
    .module('plugins.bar-chart')
    .directive('barChart', barChart);
      
  barChart.$inject = ['$log', '$window', 'plugins'];
    
  function barChart($log, $window, plugins) {
    $log = $log.getInstance('barChart');
    
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        data: '='
      },
    }
    return directive;
    
    function link(scope, ele, attrs) {
      plugins.loadScript('assets/bower_components/d3/d3.min.js', 'd3').then(function(d3) {

        var parentElement = ele[0];
    
        var barHeight = parseInt(attrs.barHeight) || 20,
            barPadding = parseInt(attrs.barPadding) || 60,
            fontSize = parseInt(attrs.fontSize) || 20,
            labelMargin = parseInt(attrs.labelMargin) || 0;

        var svg = d3.select(parentElement)
          .append('svg')
          .style('width', '100%');
    
        scope.render = function(data) {
          $log.debug('render');

          // Nothing to render if there's no data
          if (!data) return;

          var height = data.length * (barHeight + barPadding),
              color = d3.scale.category20();
          
          svg.attr('height', height);
          
          // Create the bars
          var bar = svg
            .selectAll('g')
              .data(data)
            .enter().append('g');
          
          // Add rectangles
          bar.append('rect')
            .attr('width', 0)
            .attr('height', barHeight)
            .attr('x', labelMargin)
            .attr('fill', function(d) {
              return color(d.label);
            });
            
          // Add {n}/{total} label to bar
          bar.append('text')
            .attr('x', labelMargin)
            .attr('y', barHeight / 2)
            .attr('dy', '0.35em')
            .text(function(d) {
              return '0/0';
            });
                  
          // Add text for labels
          bar.append('text')
            .attr('x', 10)
            .attr('y', barHeight / 2)
            .attr('dy', '0.35em')
            .attr('font-size', fontSize + 'px')
            .text(function(d) {
              return d.label;
            });
          
          // Add text for answer options
          bar.append('text')
            .attr('class', 'option-text')
            .attr('x', labelMargin)
            .text(function(d) {
              return d.text;
            })
            .each(wrap); // wrap is a helper function for elipsis ie: '...'
        }
        
        scope.update = function(data, transitionDuration) {
          $log.debug('update');

          // Nothing to render if there's no data
          if (!data) return;
          
          var width = d3.select(parentElement).node().offsetWidth - labelMargin,
              xScale = d3.scale.linear()
                .domain([0, d3.max(data, function(d) {
                  return d.value;
                })])
                .range([0, width]),
              barWidths = [],
              total = 0,
              transitionDuration = transitionDuration || 300;
          
          // Get total number of votes
          data.forEach(function(d) {
            barWidths.push(xScale(d.value));
            total += d.value;
          });
          
          var bar = svg.selectAll('g')
            .data(data)
            .attr('transform', function(d, i) {
              var x = 0;
              var y = i * (barHeight + barPadding) + barHeight;
              return 'translate(' + x + ',' + y + ')';
            });
              
          bar.select('rect')
            .transition()
              .duration(transitionDuration)
              .attr('width', function(d, i) {
                return barWidths[i];
              });
                  
          bar.select('text')
            .text(function(d, i) {
              return d.value.toString() + '/' + total;
            })
            .transition()
              .duration(transitionDuration)
              .attr('x', function(d, i) {
                var textWidth = this.getComputedTextLength(),
                    x = labelMargin + barWidths[i];
                return textWidth + 32 > barWidths[i]
                  ? (barWidths[i] > 0 ? x + 16 : x)
                  : x - 16;
              })
              .attr('text-anchor', function(d, i) {
                var textWidth = this.getComputedTextLength();
                return textWidth + 32 > barWidths[i]
                  ? 'start'
                  : 'end';
              })

          // Update text for answer options
          bar.select('.option-text')
            .attr('x', labelMargin)
            .attr('dy', '-10px')
            .text(function(d) {
              return d.text;
            })
            .each(wrap); // wrap is a helper function for elipsis ie: '...'

        }
        
        // Initial render
        scope.render(scope.data);
        scope.update(scope.data, 0);
    
        // SVG elements use pixel sizes, so the sizes need to be recalculated when 
        // the window is resized to remain proportional.
        var onResize = function() {
          scope.update(scope.data);
          scope.$apply();
        }
        angular.element($window).bind('resize', onResize);
        scope.$on('$destroy', function() {
          angular.element($window).unbind('resize', onResize);
        });

        // Watch for data changes and update bar sizes
        scope.$watch('data', function(newData, oldData) {
          return scope.update(newData);
        }, true);

        // Wrap text helper function
        // http://stackoverflow.com/questions/15975440/add-ellipses-to-overflowing-text-in-svg
        function wrap() {
            var self = d3.select(this),
                textLength = self.node().getComputedTextLength(),
                text = self.text(),
                width = d3.select(parentElement).node().offsetWidth - labelMargin;
                console.log('textlength ' + textLength)
            while (textLength > (width - 2) && text.length > 0) {
                text = text.slice(0, -1);
                self.text(text + '...');
                textLength = self.node().getComputedTextLength();
            }
        }

      });
    }
    
  }
  
})();