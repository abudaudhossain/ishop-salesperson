export const cookies = {
    /**
     * @description Get cookie value by key
     * @param {String} name - cookies key name
     *
     * @return {String} Cookie value or null
     */
    get: (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    },

    /**
     *@description Set cookie value by key , value and expire time
     * @param {String} name - Cookie key name
     * @param {String} value - Value of set cookie value
     * @param {Number} days - Expire time of cookie
     */
    set: (name, value, days = null) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
};
