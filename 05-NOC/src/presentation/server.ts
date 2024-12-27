
import { CronJob } from 'cron';

export class Server {

    public static start(){
        console.log('Server started...');

        const job = new CronJob(
            '*/2 * * * * *', // cronTime
            function () {
                const date = new Date();
                console.log('3 second', date);
            }, // onTick
            null, // onComplete
            true, // start
        );
        //job.start()
    }

}
