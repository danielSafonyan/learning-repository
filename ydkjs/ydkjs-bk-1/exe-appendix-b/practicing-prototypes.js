// Finally, let's work on this and objects linked via prototype (Chapter 4, Pillar 2).

// Define a slot machine with three reels that can individually spin(), and then display() the current contents of all the reels.

// The basic behavior of a single reel is defined in the reel object below. But the slot machine needs individual reels—objects that delegate to reel, and which each have a position property.

// A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel: the current slot (position), one slot above (position - 1), and one slot below (position + 1). So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    },
    displayReel() {
        console.log(this.position);

        let symbol1;
        let symbol2 = this.symbols[this.position];
        let symbol3;

        if (this.position == this.symbols.length - 1) {
            console.log('Position overflow');
            symbol3 = this.symbols[0]
            symbol1 = this.symbols[this.position - 1]
        } else if (this.position == 0) {
            console.log('Position underflow');
            symbol1 = this.symbols[this.symbols.length - 1];
            symbol3 = this.symbols[this.position + 1];
        } else {
            symbol1 = this.symbols[this.position - 1]
            symbol3 = this.symbols[this.position + 1];
        }
        this.thisReel = [symbol1, symbol2, symbol3];
    }
};

var slotMachine = {
    reels: [
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
        Object.create(reel),
        Object.create(reel),
        Object.create(reel),
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
            reel.displayReel();
        });
    },
    display() {
        this.reels.forEach(showWhatsUp(reel));

        function showWhatsUp(reel) {
            console.log(reel.thisReel)
        }
    }
};

// slotMachine.spin();
// slotMachine.display();
// // ☾ | ☀ | ★
// // ☀ | ♠ | ☾
// // ♠ | ♥ | ☀

// slotMachine.spin();
// slotMachine.display();
// // ♦ | ♠ | ♣
// // ♣ | ♥ | ☺
// ☺ | ♦ | ★

let myReel = Object.create(reel);