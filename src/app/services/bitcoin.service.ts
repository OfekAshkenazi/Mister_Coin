import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storageService } from '../services/async-storage.service'
import { tap, Observable, of, lastValueFrom, timer, switchMap } from 'rxjs';
const DATA_KEY_PRICE = "DATA_DB_PRICE"
const DATA_KEY_BLOCK = "DATA_DB_BLOCK"
const DATA_KEY_CONFRIM_TRANSACTIONS = "DATA_DB_TRANSACTIONS"
const DATA_KEY_RATE = "DATA_DB_RATE"

@Injectable({
    providedIn: 'root'
})
export class bitcoinService {

    constructor(private http: HttpClient) { }

    public getRate() {
        const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
        return this.getResult(DATA_KEY_RATE, url)
    }

    public getMarketPrice() {
        const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
        return this.getResult(DATA_KEY_PRICE, url)
    }

    public getConfirmedTransactions() {
        const url = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
        return this.getResult(DATA_KEY_CONFRIM_TRANSACTIONS, url)
    }

    private getResult(type: string, url: string) {
        const result = storageService.oldGet(type)
        if (result) return of(result)
        return this.http.get<any>(url)
            .pipe(
                tap(res => storageService.oldSave(type, res)),
            )
    }

    public getRateStream() {
        return timer(0, 1000*60*8).pipe(
            switchMap(() => this.getRate())
        )
    }
}
