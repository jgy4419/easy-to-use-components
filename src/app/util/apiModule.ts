let prevData: null | string = null;

export const apiGet = async (path: string, error: string, errFunc?: Function) => {
    try {
        const response = await fetch(`/api/${path}`);

        if(!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();
        
        // 동일한 데이터가 들어오면 빈 배열 반환
        if(prevData === JSON.stringify(data)) {
            prevData = null;
            return [];
        }

        prevData = JSON.stringify(data);
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