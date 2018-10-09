
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* Placed all of our tests within the $() function,
 * since some of these tests may require DOM elements. Just
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
         * empty. 
        */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* this test  loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
        */
         it('constains a url property that points to a valid url', function() {

                for ( const feed of allFeeds ){
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).toBeGreaterThan(7);
                    expect(feed.url).toContain('http://');
                }
         });

         


        /* this test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
        */
         it('has a name property that does not point to an empty value', function() {

            for ( const feed of allFeeds ){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            }
         });
    });


    /* The menu : this test suite checks the menu item to make 
     *  sure they are hidden by default and that their visibility
     *  gets toggled when the menu icon is clicked
    */

    describe('The menu',  function() {

        /* A test that ensures the menu element is
         * hidden by default. 
         */

        let hiddenMenu = document.querySelector('.menu-hidden .slide-menu');

        it('should have a menu-hidden & slide-menu class defined & the later must be a descendant of the former', function(){
            expect(hiddenMenu).toBeDefined();
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. 
        */

        it('should have clickable menu icon that toggles the visibility of the menu', function(){
            //click icon should be defined
            const menuIcon = document.querySelector('.menu-icon-link');
            expect(menuIcon).toBeDefined();

            /* there should be a click function on the click icon, and 
             * calling the click event listener's function should toggle the visiblity
             * of the slide-menu
            */

            menuIcon.click();
            hiddenMenu = document.querySelector('.menu-hidden .slide-menu');
            expect(hiddenMenu).toBeNull();
            menuIcon.click();
            hiddenMenu = document.querySelector('.menu-hidden .slide-menu');
            expect(hiddenMenu).toBeDefined();
        });
        
    });

    /* Initial Entries : this test suite ensure that
     * after the load function has executed there is at 
     * least 1 item in the .feed container
    */

         describe('Initial Entries', function(){

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        */

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

    /* New Feed Selection : this suite ensure that when
     * the new feeds are loaded the contents of the .feed 
     * container changes accordingly
    */

         describe('New Feed Selection', function(){

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */

            let initialFeedEntry , newFeedEntry;

            beforeEach( function(done){

                // call our asynchronous function and pass done as a call back;

                loadFeed(0, function(){
                    initialFeedEntry = $('.feed').html();
                    const id = Math.round((allFeeds.length + 1 )/2) - 1; 
                    loadFeed(id, function(){
                        newFeedEntry = $('.feed').html();
                        done();
                    });
                });
            });

            it('When a new feed is loaded the content of the .feed element should change', function(done){
                // compare both collections 
                expect(initialFeedEntry).not.toEqual(newFeedEntry);
                done();
            });
         });
}());
