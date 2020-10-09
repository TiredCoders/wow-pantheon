const { ipcRenderer } = window;

async function call(endpoint, action, data = {}) {
    try {
        return await ipcRenderer.invoke(endpoint, { action, data });
    } catch (e) {
        console.error('Api call failed', e);
        return null;
    }
}

const addons = {
    search: (name) => call('api-addons', 'search', { name }),
    list: () => call('api-addons', 'list'),
    install: (data) => call('api-addons', 'install', data),
    searchForUpdates: () => call('api-addons', 'searchForUpdates'),
    featured: () => call('api-addons', 'featured'),
};

const settings = {
    get: (name) => call('api-settings', 'get', { setting: name }),
    set: (name, value) => call('api-settings', 'set', { setting: name, value }),
};

const dialog = {
    getDir: (title, buttonLabel) => call('api-utils', 'getDir', { title, buttonLabel }),
}

export { addons, settings, dialog };