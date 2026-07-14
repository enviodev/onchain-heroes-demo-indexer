/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer, GachaToken_ApprovalForAll, GachaToken_AutomaticApprovalOfTransferValidatorSet, GachaToken_OwnershipHandoverCanceled, GachaToken_OwnershipHandoverRequested, GachaToken_OwnershipTransferred, GachaToken_RolesUpdated, GachaToken_TransferBatch, GachaToken_TransferSingle, GachaToken_TransferValidatorUpdated, GachaToken_URI, GenesisRing_Approval, GenesisRing_ApprovalForAll, GenesisRing_OwnershipHandoverCanceled, GenesisRing_OwnershipHandoverRequested, GenesisRing_OwnershipTransferred, GenesisRing_Transfer, HERO20_Approval, HERO20_OwnershipHandoverCanceled, HERO20_OwnershipHandoverRequested, HERO20_OwnershipTransferred, HERO20_Transfer, HeroERC721AC_Approval, HeroERC721AC_ApprovalForAll, HeroERC721AC_AutomaticApprovalOfTransferValidatorSet, HeroERC721AC_ConsecutiveTransfer, HeroERC721AC_OwnershipHandoverCanceled, HeroERC721AC_OwnershipHandoverRequested, HeroERC721AC_OwnershipTransferred, HeroERC721AC_Transfer, HeroERC721AC_TransferValidatorUpdated, Weapon721_Approval, Weapon721_ApprovalForAll, Weapon721_AutomaticApprovalOfTransferValidatorSet, Weapon721_ConsecutiveTransfer, Weapon721_OwnershipHandoverCanceled, Weapon721_OwnershipHandoverRequested, Weapon721_OwnershipTransferred, Weapon721_RolesUpdated, Weapon721_Transfer, Weapon721_TransferValidatorUpdated, Weapon721_WeaponGenerated, Weapon721_WeaponMetadataGenerated } from "envio";

indexer.onEvent(
  { contract: "GachaToken", event: "ApprovalForAll" },
  async ({ event, context }) => {
  const entity: GachaToken_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    isApproved: event.params.isApproved,
  };

  context.GachaToken_ApprovalForAll.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "AutomaticApprovalOfTransferValidatorSet" },
  async ({ event, context }) => {
  const entity: GachaToken_AutomaticApprovalOfTransferValidatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    autoApproved: event.params.autoApproved,
  };

  context.GachaToken_AutomaticApprovalOfTransferValidatorSet.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "OwnershipHandoverCanceled" },
  async ({ event, context }) => {
  const entity: GachaToken_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GachaToken_OwnershipHandoverCanceled.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "OwnershipHandoverRequested" },
  async ({ event, context }) => {
  const entity: GachaToken_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GachaToken_OwnershipHandoverRequested.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: GachaToken_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.GachaToken_OwnershipTransferred.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "RolesUpdated" },
  async ({ event, context }) => {
  const entity: GachaToken_RolesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    roles: event.params.roles,
  };

  context.GachaToken_RolesUpdated.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "TransferBatch" },
  async ({ event, context }) => {
  const entity: GachaToken_TransferBatch = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    amounts: event.params.amounts,
  };

  context.GachaToken_TransferBatch.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "TransferSingle" },
  async ({ event, context }) => {
  const entity: GachaToken_TransferSingle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    amount: event.params.amount,
  };

  context.GachaToken_TransferSingle.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "TransferValidatorUpdated" },
  async ({ event, context }) => {
  const entity: GachaToken_TransferValidatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldValidator: event.params.oldValidator,
    newValidator: event.params.newValidator,
  };

  context.GachaToken_TransferValidatorUpdated.set(entity);
}
);

indexer.onEvent(
  { contract: "GachaToken", event: "URI" },
  async ({ event, context }) => {
  const entity: GachaToken_URI = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
    event_id: event.params.id,
  };

  context.GachaToken_URI.set(entity);
}
);

indexer.onEvent(
  { contract: "GenesisRing", event: "Approval" },
  async ({ event, context }) => {
  const entity: GenesisRing_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    account: event.params.account,
    event_id: event.params.id,
  };

  context.GenesisRing_Approval.set(entity);
}
);

indexer.onEvent(
  { contract: "GenesisRing", event: "ApprovalForAll" },
  async ({ event, context }) => {
  const entity: GenesisRing_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    isApproved: event.params.isApproved,
  };

  context.GenesisRing_ApprovalForAll.set(entity);
}
);

indexer.onEvent(
  { contract: "GenesisRing", event: "OwnershipHandoverCanceled" },
  async ({ event, context }) => {
  const entity: GenesisRing_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GenesisRing_OwnershipHandoverCanceled.set(entity);
}
);

indexer.onEvent(
  { contract: "GenesisRing", event: "OwnershipHandoverRequested" },
  async ({ event, context }) => {
  const entity: GenesisRing_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GenesisRing_OwnershipHandoverRequested.set(entity);
}
);

indexer.onEvent(
  { contract: "GenesisRing", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: GenesisRing_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.GenesisRing_OwnershipTransferred.set(entity);
}
);

indexer.onEvent(
  { contract: "GenesisRing", event: "Transfer" },
  async ({ event, context }) => {
  const entity: GenesisRing_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
  };

  context.GenesisRing_Transfer.set(entity);

  // Simple player tracking - increment ring count for receiver
  if (event.params.to !== "0x0000000000000000000000000000000000000000") {
    let player = await context.GamePlayer.get(event.params.to);
    if (!player) {
      player = {
        id: event.params.to,
        address: event.params.to,
        heroCount: BigInt(0),
        weaponCount: BigInt(0),
        ringCount: BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
        createdAt: BigInt(event.block.timestamp),
      };
    } else {
      player = {
        ...player,
        ringCount: player.ringCount + BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
      };
    }
    context.GamePlayer.set(player);
  }

  // Decrease ring count for sender (if not from zero address)
  if (event.params.from !== "0x0000000000000000000000000000000000000000") {
    let player = await context.GamePlayer.get(event.params.from);
    if (player && player.ringCount > BigInt(0)) {
      const updatedPlayer = {
        ...player,
        ringCount: player.ringCount - BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
      };
      context.GamePlayer.set(updatedPlayer);
    }
  }
}
);

indexer.onEvent(
  { contract: "HERO20", event: "Approval" },
  async ({ event, context }) => {
  const entity: HERO20_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    amount: event.params.amount,
  };

  context.HERO20_Approval.set(entity);
}
);

indexer.onEvent(
  { contract: "HERO20", event: "OwnershipHandoverCanceled" },
  async ({ event, context }) => {
  const entity: HERO20_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HERO20_OwnershipHandoverCanceled.set(entity);
}
);

indexer.onEvent(
  { contract: "HERO20", event: "OwnershipHandoverRequested" },
  async ({ event, context }) => {
  const entity: HERO20_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HERO20_OwnershipHandoverRequested.set(entity);
}
);

indexer.onEvent(
  { contract: "HERO20", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: HERO20_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.HERO20_OwnershipTransferred.set(entity);
}
);

indexer.onEvent(
  { contract: "HERO20", event: "Transfer" },
  async ({ event, context }) => {
  const entity: HERO20_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.HERO20_Transfer.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "Approval" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.HeroERC721AC_Approval.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "ApprovalForAll" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.HeroERC721AC_ApprovalForAll.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "AutomaticApprovalOfTransferValidatorSet" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_AutomaticApprovalOfTransferValidatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    autoApproved: event.params.autoApproved,
  };

  context.HeroERC721AC_AutomaticApprovalOfTransferValidatorSet.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "ConsecutiveTransfer" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_ConsecutiveTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
    from: event.params.from,
    to: event.params.to,
  };

  context.HeroERC721AC_ConsecutiveTransfer.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "OwnershipHandoverCanceled" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HeroERC721AC_OwnershipHandoverCanceled.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "OwnershipHandoverRequested" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HeroERC721AC_OwnershipHandoverRequested.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.HeroERC721AC_OwnershipTransferred.set(entity);
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "Transfer" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.HeroERC721AC_Transfer.set(entity);

  // Simple player tracking - increment hero count for receiver
  if (event.params.to !== "0x0000000000000000000000000000000000000000") {
    let player = await context.GamePlayer.get(event.params.to);
    if (!player) {
      player = {
        id: event.params.to,
        address: event.params.to,
        heroCount: BigInt(1),
        weaponCount: BigInt(0),
        ringCount: BigInt(0),
        lastActivity: BigInt(event.block.timestamp),
        createdAt: BigInt(event.block.timestamp),
      };
    } else {
      player = {
        ...player,
        heroCount: player.heroCount + BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
      };
    }
    context.GamePlayer.set(player);
  }

  // Decrease hero count for sender (if not from zero address)
  if (event.params.from !== "0x0000000000000000000000000000000000000000") {
    let player = await context.GamePlayer.get(event.params.from);
    if (player && player.heroCount > BigInt(0)) {
      const updatedPlayer = {
        ...player,
        heroCount: player.heroCount - BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
      };
      context.GamePlayer.set(updatedPlayer);
    }
  }
}
);

indexer.onEvent(
  { contract: "HeroERC721AC", event: "TransferValidatorUpdated" },
  async ({ event, context }) => {
  const entity: HeroERC721AC_TransferValidatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldValidator: event.params.oldValidator,
    newValidator: event.params.newValidator,
  };

  context.HeroERC721AC_TransferValidatorUpdated.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "Approval" },
  async ({ event, context }) => {
  const entity: Weapon721_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.Weapon721_Approval.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "ApprovalForAll" },
  async ({ event, context }) => {
  const entity: Weapon721_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.Weapon721_ApprovalForAll.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "AutomaticApprovalOfTransferValidatorSet" },
  async ({ event, context }) => {
  const entity: Weapon721_AutomaticApprovalOfTransferValidatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    autoApproved: event.params.autoApproved,
  };

  context.Weapon721_AutomaticApprovalOfTransferValidatorSet.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "ConsecutiveTransfer" },
  async ({ event, context }) => {
  const entity: Weapon721_ConsecutiveTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
    from: event.params.from,
    to: event.params.to,
  };

  context.Weapon721_ConsecutiveTransfer.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "OwnershipHandoverCanceled" },
  async ({ event, context }) => {
  const entity: Weapon721_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.Weapon721_OwnershipHandoverCanceled.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "OwnershipHandoverRequested" },
  async ({ event, context }) => {
  const entity: Weapon721_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.Weapon721_OwnershipHandoverRequested.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: Weapon721_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.Weapon721_OwnershipTransferred.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "RolesUpdated" },
  async ({ event, context }) => {
  const entity: Weapon721_RolesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    roles: event.params.roles,
  };

  context.Weapon721_RolesUpdated.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "Transfer" },
  async ({ event, context }) => {
  const entity: Weapon721_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.Weapon721_Transfer.set(entity);

  // Simple player tracking - increment weapon count for receiver
  if (event.params.to !== "0x0000000000000000000000000000000000000000") {
    let player = await context.GamePlayer.get(event.params.to);
    if (!player) {
      player = {
        id: event.params.to,
        address: event.params.to,
        heroCount: BigInt(0),
        weaponCount: BigInt(1),
        ringCount: BigInt(0),
        lastActivity: BigInt(event.block.timestamp),
        createdAt: BigInt(event.block.timestamp),
      };
    } else {
      player = {
        ...player,
        weaponCount: player.weaponCount + BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
      };
    }
    context.GamePlayer.set(player);
  }

  // Decrease weapon count for sender (if not from zero address)
  if (event.params.from !== "0x0000000000000000000000000000000000000000") {
    let player = await context.GamePlayer.get(event.params.from);
    if (player && player.weaponCount > BigInt(0)) {
      const updatedPlayer = {
        ...player,
        weaponCount: player.weaponCount - BigInt(1),
        lastActivity: BigInt(event.block.timestamp),
      };
      context.GamePlayer.set(updatedPlayer);
    }
  }
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "TransferValidatorUpdated" },
  async ({ event, context }) => {
  const entity: Weapon721_TransferValidatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldValidator: event.params.oldValidator,
    newValidator: event.params.newValidator,
  };

  context.Weapon721_TransferValidatorUpdated.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "WeaponGenerated" },
  async ({ event, context }) => {
  const entity: Weapon721_WeaponGenerated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    to: event.params.to,
    qty: event.params.qty,
  };

  context.Weapon721_WeaponGenerated.set(entity);
}
);

indexer.onEvent(
  { contract: "Weapon721", event: "WeaponMetadataGenerated" },
  async ({ event, context }) => {
  const entity: Weapon721_WeaponMetadataGenerated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    metadata: event.params.metadata,
  };

  context.Weapon721_WeaponMetadataGenerated.set(entity);
}
);
