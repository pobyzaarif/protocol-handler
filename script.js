document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    const action = urlParams.get('action');

    if (data && action) {
        let protocolUrl = '';
        switch(action) {
            case 'tel':
                protocolUrl = `tel:${data}`;
                break;
            case 'mailto':
                protocolUrl = `mailto:${data}`;
                break;
            case 'sip':
                protocolUrl = `sip:${data}`;
                break;
            case 'mailtosip':
                protocolUrl = `mailto:sip:${data}`;
                break;
            default:
                console.log('Invalid action');
                break;
        }

        if (protocolUrl) {
            window.location.href = protocolUrl;
        }
    }

    const form = document.getElementById('actionForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const dataInput = document.getElementById('dataInput').value;
        const actionSelect = document.getElementById('actionSelect').value;
        if (dataInput && actionSelect) {
            window.location.href = `?data=${encodeURIComponent(dataInput)}&action=${encodeURIComponent(actionSelect)}`;
        }
    });
});
