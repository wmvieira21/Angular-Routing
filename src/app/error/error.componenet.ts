import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: []
})

export class ErrorComponent implements OnInit {
    errorMessage: string = "";

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.subscribe((dados: Data) => {
            this.errorMessage = dados['messageRoute'];
        });
    }
}