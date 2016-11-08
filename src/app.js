export class App {
    configureRouter(config, router) {
        config.title = 'Testing Datepickers App';

        config.map([
            {
                route: ['', 'controls'],
                name: 'controls',
                moduleId: './+controls/controls',
                nav: true,
                title: 'Controls'
            },
        ]);
        
        this.router = router;
    }
}
