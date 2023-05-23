module.exports = {
    // Extend website resources and HTML.
    website: {
        assets: "./assets",
        js: [
            "plugin.js"
        ],
        css: [
            "plugin.css"
        ]
    },
    hooks: {
        /**
         * Number each exercise.  This is run before HonKit outputs HTML and
         * indexes the page.
         */
        "page": (page) => {
            const regex = /Exercise.<\/strong>/g;
            let match = page.content.match(regex);
            let i = 0;

            while (!!match) {
                i++;
                const replace = `Exercise ${i}.</strong>`;
                page.content = page.content.replace(match[0], replace);
                match = page.content.match(regex);
            }

            return page;
        }
    },
    blocks: {
        /**
         * Format each exercise.  This is run when HonKit parses the book.
         */
        exercise: {
            process: (block) => {
                const { label } = block.kwargs;
                const prefix = !!label ? `<strong id="${label}">` : "<strong>";
                const suffix = `Exercise.</strong>${block.body}`;
                return `${prefix}${suffix}`;
            }
        }
    }
};
