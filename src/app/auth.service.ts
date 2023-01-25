export class AuthService {

    loggedIn = false;

    isAuthenticated(): Promise<boolean> {
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
        return promise;
    }

    loggin() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}