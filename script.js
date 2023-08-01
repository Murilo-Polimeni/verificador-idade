// function verificar() {
//   const sexo = document.querySelector("input[name='sexo']:checked").value
//   const numbers = document.querySelector("input#value")
//   const res = document.querySelector("div.res")
//   const idade = Number(numbers.value)
//   const texto = `Você é ${
//     sexo === "h" ? "um Homen que" : "uma Mulher que"
//   } tem ${idade} anos`
//   if (idade < 18) {
//     res.innerText = `${texto} , menor de Idade`
//   } else if (idade >= 18 && idade <= 60) {
//     res.innerText = `${texto} , maior de Idade`
//   } else {
//     res.innerText = `${texto} , Prioritário`
//   }
// }

// OU

function verificar() {
  const sexo = document.querySelector("input[name='sexo']:checked").value
  const numbers = document.querySelector("input#value")
  const res = document.querySelector("div.res")
  const idade = Number(numbers.value)
  let img = document.createElement("img")
  img.classList.add("foto-pessoa")
  let texto = `Você é ${
    sexo === "h" ? "um Homem que" : "uma Mulher que"
  } tem ${idade} anos`
  if (idade <= 18 && sexo == "h") {
    img.setAttribute("src", "https://images.virgula.me/2013/05/09/429678.jpg")
    texto += `, menor de Idade`
  } else if (idade >= 18 && idade <= 60 && sexo == "h") {
    img.setAttribute(
      "src",
      "https://i.pinimg.com/550x/c5/9d/8e/c59d8eb3315456eec813d8283651fd0a.jpg"
    )
    texto += `, Adulto`
  } else if (idade > 60 && sexo == "h") {
    texto += `, Prioritário`
    img.setAttribute(
      "src",
      "https://1.bp.blogspot.com/-tXEb1odvzdY/Wp50ulWCpFI/AAAAAAAA_SA/EYAfO0floRMXwSX7fhtQIuDr_Ln9w31owCLcBGAs/s1600/nick-wooster-moda-masculina-acima-40-anos%2B%25281%2529.jpg"
    )
  }
  if (idade <= 18 && sexo == "f") {
    img.setAttribute(
      "src",
      "https://soloinfantil.com/wp-content/uploads/2016/02/bebe-estiloso-3.jpg"
    )
    texto += `, menor de Idade`
  } else if (idade >= 18 && idade <= 60 && sexo == "f") {
    img.setAttribute(
      "src",
      "https://img.freepik.com/fotos-premium/uma-mulher-estilosa_920207-5012.jpg"
    )
    texto += `, Adulto`
  } else if (idade > 60 && sexo == "f") {
    texto += `, Prioritário`
    img.setAttribute(
      "src",
      "https://img.freepik.com/fotos-gratis/um-retrato-de-uma-mulher-expressiva_344912-2082.jpg"
    )
  }
  res.innerText = texto
  const imagemContainer = document.querySelector(".container img")
  const container = document.querySelector("section.container")
  if (imagemContainer) container.removeChild(imagemContainer)
  container.appendChild(img)
}
