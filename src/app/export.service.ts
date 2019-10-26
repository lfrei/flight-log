import { Injectable } from "@angular/core";

@Injectable()
export class ExportService {

    exportJson(data){
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: 'text/json' });
        const url= window.URL.createObjectURL(blob);
        window.open(url);
      }

}