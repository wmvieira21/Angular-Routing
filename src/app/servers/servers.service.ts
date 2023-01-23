export class ServersService {
    servers: { serverName: string, id: number, status: string }[] = [
        { serverName: 'ServerTest', id: 1, status: 'offline' },
        { serverName: 'ServerProduction', id: 2, status: 'offline' },
        { serverName: 'ServerHomo', id: 3, status: 'offline' }];

    getServers() {
        return this.servers.slice();
    }

    getServersById(id: number): any {
        const server = this.servers.find((arrayItem) => {
            return arrayItem.id == id;
        });
        return server;
    }
}