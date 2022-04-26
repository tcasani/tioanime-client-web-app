var functions = {
    capitalize: (sentence) => sentence && sentence[0].toUpperCase() + sentence.slice(1),
    no_undefined: (params, defaultvalor = 'no', params2 = '') => params === (params === undefined ? undefined : params2) ? defaultvalor : params
};
export default functions;