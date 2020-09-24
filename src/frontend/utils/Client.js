const { ipcRenderer } = window;


const addons = {
    search: (name) => call('api-addons', 'search', { name: name }),
    list: () => call('api-addons', 'list'),
};

const settings = {
    get: (name) => call('api-settings', 'get', { name: name }),
};

async function call(endpoint, action, data = {}) {
    try {
        return await ipcRenderer.invoke(endpoint, { action: action, data: data });
    } catch (e) {
        console.error('Api call failed', e);
        return null;
    }
}

export { addons, settings };