var allFeeds=[{name:"Udacity Blog",url:"https://blog.udacity.com/feed"},{name:"CSS Tricks",url:"https://feeds.feedburner.com/CssTricks"},{name:"HTML5 Rocks",url:"https://feeds.feedburner.com/html5rocks"},{name:"Linear Digressions",url:"https://feeds.feedburner.com/udacity-linear-digressions"}];function init(){loadFeed(0)}function loadFeed(e,l){var n=allFeeds[e].url,o=allFeeds[e].name;$.ajax({type:"POST",url:"https://rsstojson.udacity.com/parseFeed",data:JSON.stringify({url:n}),contentType:"application/json",success:function(e,n){var t=$(".feed"),a=$(".header-title"),d=e.feed.entries,i=(d.length,Handlebars.compile($(".tpl-entry").html()));a.html(o),t.empty(),d.forEach(function(e){t.append(i(e))}),l&&l()},error:function(e,n,t){l&&l()},dataType:"json"})}google.load(),google.setOnLoadCallback(init),$(function(){$(".feed");var n=$(".feed-list"),t=Handlebars.compile($(".tpl-feed-list-item").html()),a=0,e=$(".menu-icon-link");allFeeds.forEach(function(e){e.id=a,n.append(t(e)),a++}),n.on("click","a",function(){var e=$(this);return $("body").addClass("menu-hidden"),loadFeed(e.data("id")),!1}),e.on("click",function(){$("body").toggleClass("menu-hidden")})}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJhbGxGZWVkcyIsIm5hbWUiLCJ1cmwiLCJpbml0IiwibG9hZEZlZWQiLCJpZCIsImNiIiwiZmVlZFVybCIsImZlZWROYW1lIiwiJCIsImFqYXgiLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJjb250YWluZXIiLCJ0aXRsZSIsImVudHJpZXMiLCJmZWVkIiwiZW50cnlUZW1wbGF0ZSIsImxlbmd0aCIsIkhhbmRsZWJhcnMiLCJjb21waWxlIiwiaHRtbCIsImVtcHR5IiwiZm9yRWFjaCIsImVudHJ5IiwiYXBwZW5kIiwiZXJyb3IiLCJlcnIiLCJkYXRhVHlwZSIsImdvb2dsZSIsInNldE9uTG9hZENhbGxiYWNrIiwiZmVlZExpc3QiLCJmZWVkSXRlbVRlbXBsYXRlIiwiZmVlZElkIiwibWVudUljb24iLCJvbiIsIml0ZW0iLCJ0aGlzIiwiYWRkQ2xhc3MiLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBU0EsSUFBSUEsU0FBVyxDQUNYLENBQ0lDLEtBQU0sZUFDTkMsSUFBSyxnQ0FDTixDQUNDRCxLQUFNLGFBQ05DLElBQUsseUNBQ04sQ0FDQ0QsS0FBTSxjQUNOQyxJQUFLLDBDQUNOLENBQ0NELEtBQU0scUJBQ05DLElBQUssMkRBUWIsU0FBU0MsT0FFTEMsU0FBUyxHQVdaLFNBQVNBLFNBQVNDLEVBQUlDLEdBQ2xCLElBQUlDLEVBQVVQLFNBQVNLLEdBQUlILElBQ3ZCTSxFQUFXUixTQUFTSyxHQUFJSixLQUU1QlEsRUFBRUMsS0FBSyxDQUNMQyxLQUFNLE9BQ05ULElBQUssMENBQ0xVLEtBQU1DLEtBQUtDLFVBQVUsQ0FBQ1osSUFBS0ssSUFDM0JRLFlBQVksbUJBQ1pDLFFBQVMsU0FBVUMsRUFBUUMsR0FFakIsSUFBSUMsRUFBWVYsRUFBRSxTQUNkVyxFQUFRWCxFQUFFLGlCQUNWWSxFQUFVSixFQUFPSyxLQUFLRCxRQUV0QkUsR0FEYUYsRUFBUUcsT0FDTEMsV0FBV0MsUUFBUWpCLEVBQUUsY0FBY2tCLFNBRXZEUCxFQUFNTyxLQUFLbkIsR0FDWFcsRUFBVVMsUUFPVlAsRUFBUVEsUUFBUSxTQUFTQyxHQUNyQlgsRUFBVVksT0FBT1IsRUFBY08sTUFHL0J4QixHQUNBQSxLQUdkMEIsTUFBTyxTQUFVZixFQUFRQyxFQUFRZSxHQUVuQjNCLEdBQ0FBLEtBR2Q0QixTQUFVLFNBT2pCQyxPQUFPQyxrQkFBa0JqQyxNQU16Qk0sRUFBRSxXQUNrQkEsRUFBRSxTQUFsQixJQUNJNEIsRUFBVzVCLEVBQUUsY0FDYjZCLEVBQW1CYixXQUFXQyxRQUFRakIsRUFBRSx1QkFBdUJrQixRQUMvRFksRUFBUyxFQUNUQyxFQUFXL0IsRUFBRSxtQkFRakJULFNBQVM2QixRQUFRLFNBQVNQLEdBQ3RCQSxFQUFLakIsR0FBS2tDLEVBQ1ZGLEVBQVNOLE9BQU9PLEVBQWlCaEIsSUFFakNpQixNQU9KRixFQUFTSSxHQUFHLFFBQVMsSUFBSyxXQUN0QixJQUFJQyxFQUFPakMsRUFBRWtDLE1BSWIsT0FGQWxDLEVBQUUsUUFBUW1DLFNBQVMsZUFDbkJ4QyxTQUFTc0MsRUFBSzlCLEtBQUssUUFDWixJQU1YNEIsRUFBU0MsR0FBRyxRQUFTLFdBQ2pCaEMsRUFBRSxRQUFRb0MsWUFBWSxpQkFwQzVCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGFwcC5qc1xyXG4gKlxyXG4gKiBUaGlzIGlzIG91ciBSU1MgZmVlZCByZWFkZXIgYXBwbGljYXRpb24uIEl0IHVzZXMgdGhlIEdvb2dsZVxyXG4gKiBGZWVkIFJlYWRlciBBUEkgdG8gZ3JhYiBSU1MgZmVlZHMgYXMgSlNPTiBvYmplY3Qgd2UgY2FuIG1ha2VcclxuICogdXNlIG9mLiBJdCBhbHNvIHVzZXMgdGhlIEhhbmRsZWJhcnMgdGVtcGxhdGluZyBsaWJyYXJ5IGFuZFxyXG4gKiBqUXVlcnkuXHJcbiAqL1xyXG5cclxuLy8gVGhlIG5hbWVzIGFuZCBVUkxzIHRvIGFsbCBvZiB0aGUgZmVlZHMgd2UnZCBsaWtlIGF2YWlsYWJsZS5cclxudmFyIGFsbEZlZWRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdVZGFjaXR5IEJsb2cnLFxyXG4gICAgICAgIHVybDogJ2h0dHA6Ly9ibG9nLnVkYWNpdHkuY29tL2ZlZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0NTUyBUcmlja3MnLFxyXG4gICAgICAgIHVybDogJ2h0dHA6Ly9mZWVkcy5mZWVkYnVybmVyLmNvbS9Dc3NUcmlja3MnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0hUTUw1IFJvY2tzJyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vZmVlZHMuZmVlZGJ1cm5lci5jb20vaHRtbDVyb2NrcydcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnTGluZWFyIERpZ3Jlc3Npb25zJyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vZmVlZHMuZmVlZGJ1cm5lci5jb20vdWRhY2l0eS1saW5lYXItZGlncmVzc2lvbnMnXHJcbiAgICB9XHJcbl07XHJcblxyXG4vKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0cyB1cCBvdXIgYXBwbGljYXRpb24uIFRoZSBHb29nbGUgRmVlZFxyXG4gKiBSZWFkZXIgQVBJIGlzIGxvYWRlZCBhc3luY2hvbm91c2x5IGFuZCB3aWxsIHRoZW4gY2FsbCB0aGlzXHJcbiAqIGZ1bmN0aW9uIHdoZW4gdGhlIEFQSSBpcyBsb2FkZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gTG9hZCB0aGUgZmlyc3QgZmVlZCB3ZSd2ZSBkZWZpbmVkIChpbmRleCBvZiAwKS5cclxuICAgIGxvYWRGZWVkKDApO1xyXG59XHJcblxyXG4vKiBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGV2ZXJ5dGhpbmcgbmVjZXNzYXJ5IHRvIGxvYWQgYVxyXG4gKiBmZWVkIHVzaW5nIHRoZSBHb29nbGUgRmVlZCBSZWFkZXIgQVBJLiBJdCB3aWxsIHRoZW5cclxuICogcGVyZm9ybSBhbGwgb2YgdGhlIERPTSBvcGVyYXRpb25zIHJlcXVpcmVkIHRvIGRpc3BsYXlcclxuICogZmVlZCBlbnRyaWVzIG9uIHRoZSBwYWdlLiBGZWVkcyBhcmUgcmVmZXJlbmNlZCBieSB0aGVpclxyXG4gKiBpbmRleCBwb3NpdGlvbiB3aXRoaW4gdGhlIGFsbEZlZWRzIGFycmF5LlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFsbCBzdXBwb3J0cyBhIGNhbGxiYWNrIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGV2ZXJ5dGhpbmcgaGFzIHJ1biBzdWNjZXNzZnVsbHkuXHJcbiAqL1xyXG4gZnVuY3Rpb24gbG9hZEZlZWQoaWQsIGNiKSB7XHJcbiAgICAgdmFyIGZlZWRVcmwgPSBhbGxGZWVkc1tpZF0udXJsLFxyXG4gICAgICAgICBmZWVkTmFtZSA9IGFsbEZlZWRzW2lkXS5uYW1lO1xyXG5cclxuICAgICAkLmFqYXgoe1xyXG4gICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICB1cmw6ICdodHRwczovL3Jzc3RvanNvbi51ZGFjaXR5LmNvbS9wYXJzZUZlZWQnLFxyXG4gICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe3VybDogZmVlZFVybH0pLFxyXG4gICAgICAgY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnLmZlZWQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAkKCcuaGVhZGVyLXRpdGxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSByZXN1bHQuZmVlZC5lbnRyaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICBlbnRyaWVzTGVuID0gZW50cmllcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVudHJ5VGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoJCgnLnRwbC1lbnRyeScpLmh0bWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIHRpdGxlLmh0bWwoZmVlZE5hbWUpOyAgIC8vIFNldCB0aGUgaGVhZGVyIHRleHRcclxuICAgICAgICAgICAgICAgICBjb250YWluZXIuZW1wdHkoKTsgICAgICAvLyBFbXB0eSBvdXQgYWxsIHByZXZpb3VzIGVudHJpZXNcclxuXHJcbiAgICAgICAgICAgICAgICAgLyogTG9vcCB0aHJvdWdoIHRoZSBlbnRyaWVzIHdlIGp1c3QgbG9hZGVkIHZpYSB0aGUgR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICogRmVlZCBSZWFkZXIgQVBJLiBXZSdsbCB0aGVuIHBhcnNlIHRoYXQgZW50cnkgYWdhaW5zdCB0aGVcclxuICAgICAgICAgICAgICAgICAgKiBlbnRyeVRlbXBsYXRlIChjcmVhdGVkIGFib3ZlIHVzaW5nIEhhbmRsZWJhcnMpIGFuZCBhcHBlbmRcclxuICAgICAgICAgICAgICAgICAgKiB0aGUgcmVzdWx0aW5nIEhUTUwgdG8gdGhlIGxpc3Qgb2YgZW50cmllcyBvbiB0aGUgcGFnZS5cclxuICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChlbnRyeVRlbXBsYXRlKGVudHJ5KSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMsIGVycil7XHJcbiAgICAgICAgICAgICAgICAgLy9ydW4gb25seSB0aGUgY2FsbGJhY2sgd2l0aG91dCBhdHRlbXB0aW5nIHRvIHBhcnNlIHJlc3VsdCBkdWUgdG8gZXJyb3JcclxuICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICBkYXRhVHlwZTogXCJqc29uXCJcclxuICAgICB9KTtcclxuIH1cclxuXHJcbi8qIEdvb2dsZSBBUEk6IExvYWRzIHRoZSBGZWVkIFJlYWRlciBBUEkgYW5kIGRlZmluZXMgd2hhdCBmdW5jdGlvblxyXG4gKiB0byBjYWxsIHdoZW4gdGhlIEZlZWQgUmVhZGVyIEFQSSBpcyBkb25lIGxvYWRpbmcuXHJcbiAqL1xyXG5nb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soaW5pdCk7XHJcblxyXG4vKiBBbGwgb2YgdGhpcyBmdW5jdGlvbmFsaXR5IGlzIGhlYXZpbHkgcmVsaWFudCB1cG9uIHRoZSBET00sIHNvIHdlXHJcbiAqIHBsYWNlIG91ciBjb2RlIGluIHRoZSAkKCkgZnVuY3Rpb24gdG8gZW5zdXJlIGl0IGRvZXNuJ3QgZXhlY3V0ZVxyXG4gKiB1bnRpbCB0aGUgRE9NIGlzIHJlYWR5LlxyXG4gKi9cclxuJChmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuZmVlZCcpLFxyXG4gICAgICAgIGZlZWRMaXN0ID0gJCgnLmZlZWQtbGlzdCcpLFxyXG4gICAgICAgIGZlZWRJdGVtVGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoJCgnLnRwbC1mZWVkLWxpc3QtaXRlbScpLmh0bWwoKSksXHJcbiAgICAgICAgZmVlZElkID0gMCxcclxuICAgICAgICBtZW51SWNvbiA9ICQoJy5tZW51LWljb24tbGluaycpO1xyXG5cclxuICAgIC8qIExvb3AgdGhyb3VnaCBhbGwgb2Ygb3VyIGZlZWRzLCBhc3NpZ25pbmcgYW4gaWQgcHJvcGVydHkgdG9cclxuICAgICAqIGVhY2ggb2YgdGhlIGZlZWRzIGJhc2VkIHVwb24gaXRzIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkuXHJcbiAgICAgKiBUaGVuIHBhcnNlIHRoYXQgZmVlZCBhZ2FpbnN0IHRoZSBmZWVkSXRlbVRlbXBsYXRlIChjcmVhdGVkXHJcbiAgICAgKiBhYm92ZSB1c2luZyBIYW5kbGViYXJzKSBhbmQgYXBwZW5kIGl0IHRvIHRoZSBsaXN0IG9mIGFsbFxyXG4gICAgICogYXZhaWxhYmxlIGZlZWRzIHdpdGhpbiB0aGUgbWVudS5cclxuICAgICAqL1xyXG4gICAgYWxsRmVlZHMuZm9yRWFjaChmdW5jdGlvbihmZWVkKSB7XHJcbiAgICAgICAgZmVlZC5pZCA9IGZlZWRJZDtcclxuICAgICAgICBmZWVkTGlzdC5hcHBlbmQoZmVlZEl0ZW1UZW1wbGF0ZShmZWVkKSk7XHJcblxyXG4gICAgICAgIGZlZWRJZCsrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyogV2hlbiBhIGxpbmsgaW4gb3VyIGZlZWRMaXN0IGlzIGNsaWNrZWQgb24sIHdlIHdhbnQgdG8gaGlkZVxyXG4gICAgICogdGhlIG1lbnUsIGxvYWQgdGhlIGZlZWQsIGFuZCBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvblxyXG4gICAgICogKGZvbGxvd2luZyB0aGUgbGluaykgZnJvbSBvY2N1cnJpbmcuXHJcbiAgICAgKi9cclxuICAgIGZlZWRMaXN0Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21lbnUtaGlkZGVuJyk7XHJcbiAgICAgICAgbG9hZEZlZWQoaXRlbS5kYXRhKCdpZCcpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBXaGVuIHRoZSBtZW51IGljb24gaXMgY2xpY2tlZCBvbiwgd2UgbmVlZCB0byB0b2dnbGUgYSBjbGFzc1xyXG4gICAgICogb24gdGhlIGJvZHkgdG8gcGVyZm9ybSB0aGUgaGlkaW5nL3Nob3dpbmcgb2Ygb3VyIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIG1lbnVJY29uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbWVudS1oaWRkZW4nKTtcclxuICAgIH0pO1xyXG59KCkpO1xyXG4iXX0=