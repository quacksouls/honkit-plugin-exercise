module.exports = {
    // Extend website resources and HTML.
    // website: {
    //     assets: "./assets",
    //     js: [
    //         "plugin.js"
    //     ],
    //     css: [
    //         "plugin.css"
    //     ]
    // },
    hooks: {
        // Parse the raw Markdown content.
        "page:before": (page) => {
            page.content = page.content.replace("!EXERCISE", "<strong>Exercise.</strong>");
            return page;
        }
    }
};
