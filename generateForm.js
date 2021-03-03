export function generateForm(formSpecification) {
  let formHTML = '<form>\n'
  for (const { name } of formSpecification) {
    formHTML += `  <textarea name="${name}"></textarea>\n`
  }
  formHTML += '</form>\n'
  return formHTML
}
