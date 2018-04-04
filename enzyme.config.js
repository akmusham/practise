import Enzyme from "enzyme"
import chai from "chai"
import Adapter from "enzyme-adapter-react-16"
import chaiJestSnapshot from "chai-jest-snapshot"

chai.use(chaiJestSnapshot)
Enzyme.configure({ adapter: new Adapter() })
