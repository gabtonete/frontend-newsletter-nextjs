export const emailValidation = (email) => {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    if (reg.test(email)) {
        return true;
    }
    else {
        return false;
    }
}