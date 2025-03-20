import { Assert, Fact, Theory, InlineData } from "@rbxts/runit";
import { hello } from "../../src";

class MyPackageTest {
  @Fact
  public hello(): void {
    Assert.equal("Hello, Runic!", hello("Runic"));
  }
}

export = MyPackageTest;