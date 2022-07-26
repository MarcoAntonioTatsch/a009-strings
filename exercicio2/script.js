const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`A quantidade total de caracteres é ${minhaString.length}`)


minhaString2 = (minhaString.trim())
console.log(`agora a quantidade de caracteres é ${minhaString2.length}`)

const minhaString3 = minhaString.replaceAll("________","sticioso")
console.log(minhaString3)
