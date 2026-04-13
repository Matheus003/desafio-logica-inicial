let herois = [
  ["Thx", 9500]
];

let i = 0;

while (i < herois.length) {
  let nome = herois[i][0];
  let qntdXP = herois[i][1];
  let nvl = "";

  if (qntdXP <= 1000) {
    nvl = "Ferro";
  } else if (qntdXP <= 2000) {
    nvl = "Bronze";
  } else if (qntdXP <= 5000) {
    nvl = "Prata";
  } else if (qntdXP <= 7000) {
    nvl = "Ouro";
  } else if (qntdXP <= 8000) {
    nvl = "Platina";
  } else if (qntdXP <= 9000) {
    nvl = "Ascendente";
  } else if (qntdXP <= 10000) {
    nvl = "Imortal";
  } else {
    nvl = "Radiante";
  }

  console.log("O Herói de nome " + nome + " está no nível de " + nvl + ".");

  i++;
}
