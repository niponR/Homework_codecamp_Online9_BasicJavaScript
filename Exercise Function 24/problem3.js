        //                       1234
        //             123       1234
        //     12      123       1234
        //     12      123       1234
        //   n = 2    n = 3     n = 4

    function draw(n) {
    let number = "";
    for (let column = 1; column <= n; column++) {
        number = number + column;
    }
    for (row = 0; row < n; row++) {
        console.log(number);
    }
    }

    draw(2);

    draw(3);


    draw(4);