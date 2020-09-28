const { ipcRenderer } = window;


const addons = {
    search: (name) => call('api-addons', 'search', { name }),
    list: () => call('api-addons', 'list'),
};

const settings = {
    get: (name) => call('api-settings', 'get', { setting: name }),
    set: (name, value) => call('api-settings', 'set', { setting: name, value: value }),
};

const dialog = {
    getDir: (title, buttonLabel) => call('api-utils', 'getDir', { title, buttonLabel }),
}

async function call(endpoint, action, data = {}) {
    try {
        return await ipcRenderer.invoke(endpoint, { action, data });
    } catch (e) {
        console.error('Api call failed', e);
        return null;
    }
}

export { addons, settings, dialog };