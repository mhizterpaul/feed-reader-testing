
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('constains a url property that points to a valid url', function() {

                for ( const feed of allFeeds ){
                    expect(feed.url).toBeDefined();
                    expect(feed.url).toContain('http://');
                }
         });

         


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name property that does not point to an empty value', function() {

            for ( const feed of allFeeds ){
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy();
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('The menu',  function() {
        let hiddenMenu = document.querySelector('.menu-hidden .slide-menu');

        it('should have a menu-hidden & slide-menu class defined & the later must be a descendant of the former', function(){
            expect(hiddenMenu).toBeDefined();
        });

        it('should have clickable menu icon that toggles the visibility of the menu', function(){
            //click icon should be defined
            const menuIcon = document.querySelector('.menu-icon-link');
            expect(menuIcon).toBeDefined();
            /*there should be a click function on the click icon, and 
             *calling the click event listener's function should toggle the visiblity
             *of the slide-menu;*/
            menuIcon.click();
            hiddenMenu = document.querySelector('.menu-hidden .slide-menu');
            expect(hiddenMenu).toBeNull();
            menuIcon.click();
            hiddenMenu = document.querySelector('.menu-hidden .slide-menu');
            expect(hiddenMenu).toBeDefined();
        });
        
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('Initial Entries', function(){

            beforeEach( function(done){
                //call our asynchronous function and pass done as a call back;
                loadFeed(0, function(){
                    done();
                });
            });

            it('when feedloader completes there should be at least one .entry element in the .feed element', function(done){

                expect($('.feed .entry').length).toBeGreaterThan(0);
                done();
            });

         });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         describe('New Feed Selection', function(){
            let initialFeedEntry , newFeedEntry;

            beforeEach( function(done){
                // call our asynchronous function and pass done as a call back;

                loadFeed(0, function(){
                    initialFeedEntry = $('.feed .entry');
                    const id = Math.round((allFeeds.length + 1 )/2) - 1; 
                    loadFeed(id, function(){
                        newFeedEntry = $('.feed .entry');
                        done();
                    });
                });
            });

            it('When a new feed is loaded the content of the .feed element should change', function(done){
                // compare both collections 
                expect(initialFeedEntry).not.toBe(newFeedEntry);
                done();
            });
         });
}());
