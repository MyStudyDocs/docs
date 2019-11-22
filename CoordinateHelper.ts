
export class CoordinateHelper{
    //dx 是十进制的经度
    ConvertX(dx){
        var numX = parseInt(dx); //整数度
        var numXStr = '';
        var numXAbs = Math.abs(numX);
        if(numXAbs.toString().length==1){
            numXStr = '00'+ numXAbs.toString();
        }else if(numXAbs.toString().length==2){
            numXStr = '0'+ numXAbs.toString();
        }else{
            numXStr = numXAbs.toString();
        }

        if(numX<0){
            numXStr = '-'+numXStr;
        }

        var numXF = ( Math.abs(dx - numX) ) * 60; //分带小数
        var numSX = parseInt(numXF.toString()).toString(); //分整数
        var numMXF= ( Math.abs( (numXF - parseInt(numSX)) ) * 60);//秒带小数
        var numMX = parseInt(numMXF.toString()); //秒的整数位数
        var numHMX = parseInt( ( Math.abs((numMXF-numMX)) * 1000).toString() ) //毫秒
        return numXStr + '.' + (numSX.length > 1 ? numSX : '0' + numSX) + (numMX.toString().length > 1 ? numMX : '0' + numMX) + (numHMX>0?numHMX.toString():'');
    }

    ConvertXNum(dx){
        return parseFloat(this.ConvertX(dx));
    }

    //dx 是十进制的纬度
    ConvertY(dy){
        var numY = parseInt(dy); //整数度

        var numYStr = '';
        var numYAbs = Math.abs(numY);
        if(numYAbs.toString().length==1){
            numYStr = '0'+ numYAbs.toString();
        }else{
            numYStr = numYAbs.toString();
        }

        if(numY<0){
            numYStr = '-'+numYStr;
        }

        var numYF = Math.abs((dy - numY)) * 60; //分带小数
        var numSY = parseInt(numYF.toString()).toString(); //整数分
        var numMYF= ( Math.abs(numYF - parseInt(numSY)) * 60);//秒带小数
        var numMY = parseInt(numMYF.toString()); //秒的整数位数
        var numHMY = parseInt( ( Math.abs(numMYF-numMY) * 1000).toString() ) //毫秒
        return numYStr + '.' + (numSY.length > 1 ? numSY : '0' + numSY) + (numMY.toString().length > 1 ? numMY : '0' + numMY) + (numHMY>0?numHMY.toString():'');
    }

    ConvertYNum(dy){
        return parseFloat(this.ConvertY(dy));
    }

    //dx 是度分秒的经度
    ConvertXToDec(dx){
        var numX= parseInt(dx); //整数 x
        var dxStrArr=dx.toString().split('.');
        var fen = dxStrArr[1].substring(0,2);
        var miao = dxStrArr[1].substring(2,4);
        var haomiao= dxStrArr[1].substr(4,3);
        var numDecF= fen/60 + miao/3600 + haomiao/(3600*1000);

        var total= numX>0?(numX+numDecF):numX-numDecF;
        return parseFloat(total.toString());
    }

    //dx 是度分秒的纬度
    ConvertYToDec(dy){
        var numY= parseInt(dy); //整数 x
        var dxStrArr=dy.toString().split('.');
        var fen = dxStrArr[1].substring(0,2);
        var miao = dxStrArr[1].substring(2,4);
        var haomiao= dxStrArr[1].substr(4,3);
        var numDecF= fen/60 + miao/3600 + haomiao/(3600*1000);

        var total= numY>0?(numY+numDecF):numY-numDecF;
        return parseFloat(total.toString().toString());
    }
}




