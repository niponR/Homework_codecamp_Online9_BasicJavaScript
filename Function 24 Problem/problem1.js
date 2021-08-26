 //    **       ***       ****
        //   n = 2    n = 3     n = 4

        function draw(n) {
            let star = "";
            for (let i = 0; i < n; i++) {
                star = star + "*";
            }
            console.log(star)
        }
        
        draw(2);

        draw(3);

        draw(4);