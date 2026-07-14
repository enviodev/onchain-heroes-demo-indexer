import assert from "assert";
import { TestHelpers, GachaToken_ApprovalForAll } from "envio";
const { MockDb, GachaToken } = TestHelpers;

describe("GachaToken contract ApprovalForAll event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for GachaToken contract ApprovalForAll event
  const event = GachaToken.ApprovalForAll.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("GachaToken_ApprovalForAll is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await GachaToken.ApprovalForAll.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualGachaTokenApprovalForAll = mockDbUpdated.entities.GachaToken_ApprovalForAll.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedGachaTokenApprovalForAll: GachaToken_ApprovalForAll = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      operator: event.params.operator,
      isApproved: event.params.isApproved,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualGachaTokenApprovalForAll, expectedGachaTokenApprovalForAll, "Actual GachaTokenApprovalForAll should be the same as the expectedGachaTokenApprovalForAll");
  });
});
