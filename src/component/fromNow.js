import dayjs from 'dayjs';
// require('dayjs/locale/zh-cn')
import 'dayjs/locale/zh-cn' // ES 2015 
dayjs.locale('zh-cn') // 全局使用
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);

export default function FromNow(props){
    let {date}=props;
    return dayjs(date).fromNow()
}