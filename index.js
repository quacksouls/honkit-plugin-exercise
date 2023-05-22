module.exports = {
    hooks: {
        /**
         * Number each exercise.  This is run before HonKit outputs HTML and
         * indexes the page.
         */
        "page": (page) => {
            const regex = /<strong>Exercise.<\/strong>/g;
            let match = page.content.match(regex);
            let i = 0;

            while (!!match) {
                i++;
                const replace = `<strong>Exercise ${i}.</strong>`;
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
                const prefix = !!label ? `<p id="${label}">` : "<p>";
                const suffix = `<strong>Exercise.</strong>${block.body}</p>`;
                return `${prefix}${suffix}`;
            }
        }
    }
};
