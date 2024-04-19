export default function paginate<Limit extends number>(limit: Limit): <Page extends number>(page: Page) => <Value>(values: Iterable<Value>) => Generator<Value, void, void>;
