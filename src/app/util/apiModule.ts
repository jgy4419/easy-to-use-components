export const apiGet = async (path: string, error: string, errFunc?: Function) => {
    try {
        const response = await fetch(`/api/${path}`);

        if(!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        errFunc && errFunc();
        alert(err);
    }
}

export const apiDelete = async (path: string, error: string, errFunc?: Function) => {
    try {
        const response = await fetch(`/api/${path}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            throw new Error(error);
        }

        return response.ok;
    } catch(err) {
        errFunc && errFunc();
        alert(error);
    }
    
}

export const apiPost = async (path: string, postData: Object, error: string, errFunc?: Function) => {
    await fetch(`/api/${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    }).catch(() => {
        alert(error);

        errFunc && errFunc();
    });
}

export const apiPut = async (path: string, postData: Object, error: string, errFunc?: Function) => {
    await fetch(`/api/${path}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    }).catch(() => {
        alert(error);

        errFunc && errFunc();
    });
}