function sandwichSummary(items: string[]) {
    console.log("Your sandwich has:");
    items.forEach((item) => console.log("*", item));
}

sandwichSummary(["ketchup", "egg"]);
sandwichSummary(["cheese", "bread"]);
sandwichSummary(["chicken", "cheese"]);

OUTPUT//

