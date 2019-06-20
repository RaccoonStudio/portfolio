import React from "react"
import renderer from "react-test-renderer"

import PageTitle from "./PageTitle"

describe("PageTitle", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PageTitle>Hello World!</PageTitle>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
