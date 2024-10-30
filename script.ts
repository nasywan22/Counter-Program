class System {
    public numberTxt = document.getElementById("number");
    public counterUp = document.getElementById("counterUp");
    public counterDown = document.getElementById("counterDown") as HTMLButtonElement;
    public resetBtn = document.getElementById("resetBtn");
    public counterNum: number = 0;
    public MPC: number = 1;

    public input = document.getElementById('input-multiplier') as HTMLInputElement;
    public inputBtn = document.getElementById('push-input');
    public resetMCP = document.getElementById("resetMCP") as HTMLButtonElement;
    public multiplierStatus = document.getElementById("mstatus");

    public multiplier2 = document.getElementById("2x") as HTMLButtonElement;
    public multiplier5 = document.getElementById("5x") as HTMLButtonElement;
    public multiplier10 = document.getElementById("10x") as HTMLButtonElement;

    public tempArray = [this.multiplier2, this.multiplier5, this.multiplier10];


    async BtnAction() {
        this.counterDown.disabled = true;

        this.counterUp.addEventListener('click', () => {
            this.counterDown.disabled = false;
            this.counterNum += this.MPC;
            this.numberTxt.textContent = this.counterNum.toString();
        })

        this.counterDown.addEventListener('click', () => {
            this.counterNum -= this.MPC;

            if (this.counterNum == 0) {
                this.counterDown.disabled = true;
            }

            this.numberTxt.textContent = this.counterNum.toString();
        })

        this.resetBtn.addEventListener('click', () => {
            this.counterNum = 0;
            this.numberTxt.textContent = this.counterNum.toString();
            this.counterDown.disabled = true;
        })

        this.inputBtn.addEventListener('click', async () => {
            this.MPC = parseInt(this.input.value);
            this.input.value = '';
            sys.multiplierStatus.textContent = `${sys.MPC}X`;

            this.inputBtn.textContent = '';
            await sleep(50);

            let checkicon: HTMLElement = document.createElement("i");
            checkicon.classList.add("fa-solid", "fa-check");
            this.inputBtn.appendChild(checkicon);
            await sleep(2000);

            this.inputBtn.removeChild(checkicon);
            this.inputBtn.textContent = 'multiply!';
        })

        this.resetMCP.addEventListener('click', async () => {
            this.MPC = 1;
            sys.multiplierStatus.textContent = `${this.MPC}X`;

            this.resetMCP.textContent = '';
            await sleep(50);

            let checkicon: HTMLElement = document.createElement("i");
            checkicon.classList.add("fa-solid", "fa-check");
            this.resetMCP.appendChild(checkicon);
            checkicon.style.color = 'white';

            this.tempArray.forEach(item => {
                item.style.backgroundColor = 'transparent';
                item.style.color = 'black';
            });

            await sleep(2000);

            this.resetMCP.removeChild(checkicon);
            this.resetMCP.textContent = 'Reset';
        })

        this.multiplier2.addEventListener('click', () => {
            this.MPC = 2;

            this.tempArray.forEach(item => {
                if (item === this.multiplier2) return

                item.style.backgroundColor = 'transparent';
                item.style.color = 'black';
            });

            this.multiplier2.style.backgroundColor = 'blue';
            this.multiplier2.style.color = 'white';

            this.multiplierStatus.textContent = `${this.MPC}X`;
        })

        this.multiplier5.addEventListener('click', () => {
            this.MPC = 5;

            this.tempArray.forEach(item => {
                if (item == this.multiplier5) return

                item.style.backgroundColor = 'transparent';
                item.style.color = 'black';
            });

            this.multiplier5.style.backgroundColor = 'orange';
            this.multiplier5.style.color = 'white';

            this.multiplierStatus.textContent = `${this.MPC}X`
        })

        this.multiplier10.addEventListener('click', () => {
            this.MPC = 10;

            this.tempArray.forEach(item => {
                if (item == this.multiplier10) return

                item.style.backgroundColor = 'transparent';
                item.style.color = 'black';
            });

            this.multiplier10.style.backgroundColor = 'green';
            this.multiplier10.style.color = 'white';

            this.multiplierStatus.textContent = `${this.MPC}X`
        })
    }
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const sys = new System();

sys.multiplierStatus.textContent = `${sys.MPC}X`;

sys.BtnAction();