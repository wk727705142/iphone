import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import wrzMockArr from './mockWrz/mock-wrz';
import LllMockArr from "./mockLll/mock-Lll";
import ZhjMockArr from "./mockZhj/mock-zhj";
import WxyMockArr from "./mockWxy/mock-wxy";
const mock=new MockAdapter(axios);
function dealMock(wrzMockArr){
    wrzMockArr.forEach(item=>{
        if(item.method==='get'){
            mock.onGet(item.url).reply(item.reply)
        }
    })
}

dealMock(wrzMockArr);
dealMock(LllMockArr);
dealMock(ZhjMockArr);
dealMock(WxyMockArr);

