        //                       ****
        //             ***       ****
        //    **       ***       ****
        //    **       ***       ****
        //   n = 2    n = 3     n = 4

        function draw(n) {
            let star = "";
            for (column = 0; column < n; column++) {
                star = star + "*";
            }
            for (row = 0; row < n; row++) {
                console.log(star);
            }
        }
        
        draw(2);
        draw(3);
        draw(4);