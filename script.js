
let c = parseFloat(localStorage.getItem("progressaoDoLevel"))
let level =  parseInt(localStorage.getItem("levelUp"))
let porcantagemLevel = parseFloat(localStorage.getItem("porcentagemLevel"))
let contStatusEnergia = parseFloat(localStorage.getItem("contStatusEnergia"))
let statusEnergiaRgb = parseFloat(localStorage.getItem("statusEnergiaRgb"))
let statusEnergiarGb = parseFloat(localStorage.getItem("statusEnergiarGb"))
let convPorcentagemEnergia = parseFloat(localStorage.getItem("convPorcentagemEnergia")) 

let contStatusSaude = parseFloat(localStorage.getItem("contStatusSaude"))
let statusSaudeRgb = parseFloat(localStorage.getItem("statusSaudeRgb"))
let statusSauderGb = parseFloat(localStorage.getItem("statusSauderGb"))
let convPorcentagemSaude = parseFloat(localStorage.getItem("convPorcentagemSaude")) 


if (localStorage.length > 0) {


} else {

    localStorage.setItem("porcentagemLevel", "0%")
    localStorage.setItem("levelUp", "1")
    localStorage.setItem("progressaoDoLevel" , "-100")
    localStorage.setItem("barraDeLevel", "translateX(-100%)")
    localStorage.setItem("contStatusEnergia", "0")
    localStorage.setItem("statusEnergiaRgb", "0")
    localStorage.setItem("statusEnergiarGb", "255")
    localStorage.setItem("statusDeEnergia", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 255, 0) 0%)")
    localStorage.setItem("convPorcentagemEnergia", "100")

    localStorage.setItem("contStatusSaude", "0")
    localStorage.setItem("statusSaudeRgb", "0")
    localStorage.setItem("statusSauderGb", "255")
    localStorage.setItem("statusDeSaude", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 255, 0) 0%)")
    localStorage.setItem("convPorcentagemSaude", "100")
    
}

document.getElementById('mPorcentagemDeLevel').title = localStorage.getItem("porcentagemLevel");

document.getElementById('mPorcentagemDaEnergia').title = "Energia: "+ localStorage.getItem("convPorcentagemEnergia") +"%"

document.getElementById('mPorcentagemDaSaude').title = "Saúde: "+ localStorage.getItem("convPorcentagemSaude") +"%"

document.getElementById('level').innerText = localStorage.getItem("levelUp");

document.getElementById('progressao').style.transform = localStorage.getItem("barraDeLevel");

document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

document.getElementById("saudeDoPet").style.background = localStorage.getItem("statusDeSaude")

function mudar() {
        if (c == 0) {

            if(level == 0) {
                level = 2
            }

            level++

            localStorage.setItem("levelUp", level.toString())

            document.getElementById('level').innerText = localStorage.getItem("levelUp");

            c = -100

            let porcantagemLevelSoma = c + 100

            if(porcantagemLevelSoma == 100) {
                porcantagemLevelSoma = 99
            }

            porcantagemLevel = porcantagemLevelSoma.toString() + "%"

            document.getElementById('mPorcentagemDeLevel').title = porcantagemLevel;

            localStorage.setItem("porcentagemLevel", porcantagemLevel)
            
            localStorage.setItem("progressaoDoLevel" , c.toString())

            const stringAumento = c.toString() + "%";

            const progressao = "translateX(" + stringAumento + ")";

            document.getElementById('progressao').style.transform = progressao;

            localStorage.setItem("barraDeLevel", progressao)

            


        } else {
           
            c = c + 10;

            let porcantagemLevelSoma = c + 100

            if(porcantagemLevelSoma == 100) {
                porcantagemLevelSoma = 99
            }

            porcantagemLevel = porcantagemLevelSoma.toString() + "%"

            document.getElementById('mPorcentagemDeLevel').title = porcantagemLevel;

            localStorage.setItem("porcentagemLevel", porcantagemLevel)
            
            localStorage.setItem("progressaoDoLevel" , c.toString())

            const stringAumento = c.toString() + "%";

            const progressao = "translateX(" + stringAumento + ")";

            document.getElementById('progressao').style.transform = progressao;

            localStorage.setItem("barraDeLevel", progressao)
        }

}

/**Status Energia */

setInterval(function() {
    
    if (contStatusEnergia < 100) {

        statusEnergiaRgb += 5
        localStorage.setItem("statusEnergiaRgb", statusEnergiaRgb.toString())

        contStatusEnergia++

        let porcantagemEnergiaSoma = contStatusEnergia - 100 

        let convPorcentagemEnergia = porcantagemEnergiaSoma * -1

        if (contStatusEnergia == 0) {
            convPorcentagemEnergia = 100
        }

        localStorage.setItem("convPorcentagemEnergia", convPorcentagemEnergia.toString())

        document.getElementById('mPorcentagemDaEnergia').title = "Energia: "+ localStorage.getItem("convPorcentagemEnergia") +"%"

        localStorage.setItem("contStatusEnergia", contStatusEnergia.toString())

        const StringTemp = contStatusEnergia + "%"

        if (contStatusEnergia <= 65) {

            const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTemp +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"

            localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)

        } else {
            
            statusEnergiarGb -= 15
            localStorage.setItem("statusEnergiarGb", statusEnergiarGb.toString())

            const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTemp +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"

            localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)
        }

    }
    
    document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

} , 60000);

/**Status de Energia Zerado */

setInterval(function() {
    
    if (contStatusEnergia == 100) {
        if (contStatusSaude < 100) {

            statusSaudeRgb += 5
            localStorage.setItem("statusSaudeRgb", statusSaudeRgb.toString())
    
            contStatusSaude++
    
            let porcantagemSaudeSoma = contStatusSaude - 100 
    
            let convPorcentagemSaude = porcantagemSaudeSoma * -1
    
            if (contStatusSaude == 0) {
                convPorcentagemSaude = 100
            }
    
            localStorage.setItem("convPorcentagemSaude", convPorcentagemSaude.toString())
    
            document.getElementById('mPorcentagemDaSaude').title = "Saúde: "+ localStorage.getItem("convPorcentagemSaude") +"%"
    
            localStorage.setItem("contStatusSaude", contStatusSaude.toString())
    
            const StringTemp = contStatusSaude + "%"
    
            if (contStatusSaude <= 65) {
    
                const porcentagemDaSaude = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTemp +",rgb("+ statusSaudeRgb.toString() +","+ statusSauderGb.toString() +", 0) 0%)"
    
                localStorage.setItem("statusDeSaude", porcentagemDaSaude)
    
            } else {
                
                statusSauderGb -= 15
                localStorage.setItem("statusSauderGb", statusSauderGb.toString())
    
                const porcentagemDaSaude = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTemp +",rgb("+ statusSaudeRgb.toString() +","+ statusSauderGb.toString() +", 0) 0%)"
    
                localStorage.setItem("statusDeSaude", porcentagemDaSaude)
            }
    
        }
        
        document.getElementById("saudeDoPet").style.background = localStorage.getItem("statusDeSaude")
    }

    

} , 5000);
    

