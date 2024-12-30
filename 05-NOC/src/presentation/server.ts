import { CronService } from "./cron/cron-service";


export class Server {

    public static start(){

        console.log('Server started...');
        
        CronService.createJob(
            '*/5 * * * * *', // cronTime
            function () {
                const date = new Date();
                console.log('5 second', date);
            }, // onTick
        );
        
    }

}
