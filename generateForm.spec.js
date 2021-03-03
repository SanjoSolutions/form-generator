import { generateForm } from './generateForm.js'

describe('generateForm', () => {
  it('generates a form', () => {
    const formSpecification = [
      {
        name: 'paragraph1',
        type: 'string',
      },
    ]

    const form = generateForm(formSpecification)

    expect(form).toEqual(`<form>
  <textarea name="paragraph1"></textarea>
</form>
`)
  })

  it('generates a form with two paragraphs', () => {
    const formSpecification = [
      {
        name: 'paragraph1',
        type: 'string',
      },
      {
        name: 'paragraph2',
        type: 'string',
      },
    ]

    const form = generateForm(formSpecification)

    expect(form).toEqual(`<form>
  <textarea name="paragraph1"></textarea>
  <textarea name="paragraph2"></textarea>
</form>
`)
  })
})
