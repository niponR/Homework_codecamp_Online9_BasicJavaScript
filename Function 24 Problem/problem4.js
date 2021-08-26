        //                       1111
        //             111       2222
        //     11      222       3333
        //     22      333       4444
        //   n = 2    n = 3     n = 4

function draw(n) {
    
    for(let row = 1; row <=n; row++) {
        let number = ""
        for (column = 0; column < n; column++){
            number = number + row;
        }
        console.log(number);
    }
}

draw(4)
