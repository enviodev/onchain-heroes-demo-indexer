/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  GachaToken,
  GachaToken_ApprovalForAll,
  GachaToken_AutomaticApprovalOfTransferValidatorSet,
  GachaToken_OwnershipHandoverCanceled,
  GachaToken_OwnershipHandoverRequested,
  GachaToken_OwnershipTransferred,
  GachaToken_RolesUpdated,
  GachaToken_TransferBatch,
  GachaToken_TransferSingle,
  GachaToken_TransferValidatorUpdated,
  GachaToken_URI,
  GenesisRing,
  GenesisRing_Approval,
  GenesisRing_ApprovalForAll,
  GenesisRing_OwnershipHandoverCanceled,
  GenesisRing_OwnershipHandoverRequested,
  GenesisRing_OwnershipTransferred,
  GenesisRing_Transfer,
  HERO20,
  HERO20_Approval,
  HERO20_OwnershipHandoverCanceled,
  HERO20_OwnershipHandoverRequested,
  HERO20_OwnershipTransferred,
  HERO20_Transfer,
  HeroERC721AC,
  HeroERC721AC_Approval,
  HeroERC721AC_ApprovalForAll,
  HeroERC721AC_AutomaticApprovalOfTransferValidatorSet,
  HeroERC721AC_ConsecutiveTransfer,
  HeroERC721AC_OwnershipHandoverCanceled,
  HeroERC721AC_OwnershipHandoverRequested,
  HeroERC721AC_OwnershipTransferred,
  HeroERC721AC_Transfer,
  HeroERC721AC_TransferValidatorUpdated,
  Weapon721,
  Weapon721_Approval,
  Weapon721_ApprovalForAll,
  Weapon721_AutomaticApprovalOfTransferValidatorSet,
  Weapon721_ConsecutiveTransfer,
  Weapon721_OwnershipHandoverCanceled,
  Weapon721_OwnershipHandoverRequested,
  Weapon721_OwnershipTransferred,
  Weapon721_RolesUpdated,
  Weapon721_Transfer,
  Weapon721_TransferValidatorUpdated,
  Weapon721_WeaponGenerated,
  Weapon721_WeaponMetadataGenerated,
} from "generated";

GachaToken.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: GachaToken_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    isApproved: event.params.isApproved,
  };

  context.GachaToken_ApprovalForAll.set(entity);
});

GachaToken.AutomaticApprovalOfTransferValidatorSet.handler(async ({ event, context }) => {
  const entity: GachaToken_AutomaticApprovalOfTransferValidatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    autoApproved: event.params.autoApproved,
  };

  context.GachaToken_AutomaticApprovalOfTransferValidatorSet.set(entity);
});

GachaToken.OwnershipHandoverCanceled.handler(async ({ event, context }) => {
  const entity: GachaToken_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GachaToken_OwnershipHandoverCanceled.set(entity);
});

GachaToken.OwnershipHandoverRequested.handler(async ({ event, context }) => {
  const entity: GachaToken_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GachaToken_OwnershipHandoverRequested.set(entity);
});

GachaToken.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: GachaToken_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.GachaToken_OwnershipTransferred.set(entity);
});

GachaToken.RolesUpdated.handler(async ({ event, context }) => {
  const entity: GachaToken_RolesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    roles: event.params.roles,
  };

  context.GachaToken_RolesUpdated.set(entity);
});

GachaToken.TransferBatch.handler(async ({ event, context }) => {
  const entity: GachaToken_TransferBatch = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    amounts: event.params.amounts,
  };

  context.GachaToken_TransferBatch.set(entity);
});

GachaToken.TransferSingle.handler(async ({ event, context }) => {
  const entity: GachaToken_TransferSingle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    amount: event.params.amount,
  };

  context.GachaToken_TransferSingle.set(entity);
});

GachaToken.TransferValidatorUpdated.handler(async ({ event, context }) => {
  const entity: GachaToken_TransferValidatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldValidator: event.params.oldValidator,
    newValidator: event.params.newValidator,
  };

  context.GachaToken_TransferValidatorUpdated.set(entity);
});

GachaToken.URI.handler(async ({ event, context }) => {
  const entity: GachaToken_URI = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
    event_id: event.params.id,
  };

  context.GachaToken_URI.set(entity);
});

GenesisRing.Approval.handler(async ({ event, context }) => {
  const entity: GenesisRing_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    account: event.params.account,
    event_id: event.params.id,
  };

  context.GenesisRing_Approval.set(entity);
});

GenesisRing.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: GenesisRing_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    isApproved: event.params.isApproved,
  };

  context.GenesisRing_ApprovalForAll.set(entity);
});

GenesisRing.OwnershipHandoverCanceled.handler(async ({ event, context }) => {
  const entity: GenesisRing_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GenesisRing_OwnershipHandoverCanceled.set(entity);
});

GenesisRing.OwnershipHandoverRequested.handler(async ({ event, context }) => {
  const entity: GenesisRing_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.GenesisRing_OwnershipHandoverRequested.set(entity);
});

GenesisRing.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: GenesisRing_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.GenesisRing_OwnershipTransferred.set(entity);
});

GenesisRing.Transfer.handler(async ({ event, context }) => {
  const entity: GenesisRing_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
  };

  context.GenesisRing_Transfer.set(entity);
});

HERO20.Approval.handler(async ({ event, context }) => {
  const entity: HERO20_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    amount: event.params.amount,
  };

  context.HERO20_Approval.set(entity);
});

HERO20.OwnershipHandoverCanceled.handler(async ({ event, context }) => {
  const entity: HERO20_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HERO20_OwnershipHandoverCanceled.set(entity);
});

HERO20.OwnershipHandoverRequested.handler(async ({ event, context }) => {
  const entity: HERO20_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HERO20_OwnershipHandoverRequested.set(entity);
});

HERO20.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: HERO20_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.HERO20_OwnershipTransferred.set(entity);
});

HERO20.Transfer.handler(async ({ event, context }) => {
  const entity: HERO20_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.HERO20_Transfer.set(entity);
});

HeroERC721AC.Approval.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.HeroERC721AC_Approval.set(entity);
});

HeroERC721AC.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.HeroERC721AC_ApprovalForAll.set(entity);
});

HeroERC721AC.AutomaticApprovalOfTransferValidatorSet.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_AutomaticApprovalOfTransferValidatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    autoApproved: event.params.autoApproved,
  };

  context.HeroERC721AC_AutomaticApprovalOfTransferValidatorSet.set(entity);
});

HeroERC721AC.ConsecutiveTransfer.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_ConsecutiveTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
    from: event.params.from,
    to: event.params.to,
  };

  context.HeroERC721AC_ConsecutiveTransfer.set(entity);
});

HeroERC721AC.OwnershipHandoverCanceled.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HeroERC721AC_OwnershipHandoverCanceled.set(entity);
});

HeroERC721AC.OwnershipHandoverRequested.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.HeroERC721AC_OwnershipHandoverRequested.set(entity);
});

HeroERC721AC.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.HeroERC721AC_OwnershipTransferred.set(entity);
});

HeroERC721AC.Transfer.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.HeroERC721AC_Transfer.set(entity);
});

HeroERC721AC.TransferValidatorUpdated.handler(async ({ event, context }) => {
  const entity: HeroERC721AC_TransferValidatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldValidator: event.params.oldValidator,
    newValidator: event.params.newValidator,
  };

  context.HeroERC721AC_TransferValidatorUpdated.set(entity);
});

Weapon721.Approval.handler(async ({ event, context }) => {
  const entity: Weapon721_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.Weapon721_Approval.set(entity);
});

Weapon721.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: Weapon721_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.Weapon721_ApprovalForAll.set(entity);
});

Weapon721.AutomaticApprovalOfTransferValidatorSet.handler(async ({ event, context }) => {
  const entity: Weapon721_AutomaticApprovalOfTransferValidatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    autoApproved: event.params.autoApproved,
  };

  context.Weapon721_AutomaticApprovalOfTransferValidatorSet.set(entity);
});

Weapon721.ConsecutiveTransfer.handler(async ({ event, context }) => {
  const entity: Weapon721_ConsecutiveTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
    from: event.params.from,
    to: event.params.to,
  };

  context.Weapon721_ConsecutiveTransfer.set(entity);
});

Weapon721.OwnershipHandoverCanceled.handler(async ({ event, context }) => {
  const entity: Weapon721_OwnershipHandoverCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.Weapon721_OwnershipHandoverCanceled.set(entity);
});

Weapon721.OwnershipHandoverRequested.handler(async ({ event, context }) => {
  const entity: Weapon721_OwnershipHandoverRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pendingOwner: event.params.pendingOwner,
  };

  context.Weapon721_OwnershipHandoverRequested.set(entity);
});

Weapon721.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Weapon721_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.Weapon721_OwnershipTransferred.set(entity);
});

Weapon721.RolesUpdated.handler(async ({ event, context }) => {
  const entity: Weapon721_RolesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    roles: event.params.roles,
  };

  context.Weapon721_RolesUpdated.set(entity);
});

Weapon721.Transfer.handler(async ({ event, context }) => {
  const entity: Weapon721_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.Weapon721_Transfer.set(entity);
});

Weapon721.TransferValidatorUpdated.handler(async ({ event, context }) => {
  const entity: Weapon721_TransferValidatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldValidator: event.params.oldValidator,
    newValidator: event.params.newValidator,
  };

  context.Weapon721_TransferValidatorUpdated.set(entity);
});

Weapon721.WeaponGenerated.handler(async ({ event, context }) => {
  const entity: Weapon721_WeaponGenerated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    to: event.params.to,
    qty: event.params.qty,
  };

  context.Weapon721_WeaponGenerated.set(entity);
});

Weapon721.WeaponMetadataGenerated.handler(async ({ event, context }) => {
  const entity: Weapon721_WeaponMetadataGenerated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    metadata: event.params.metadata,
  };

  context.Weapon721_WeaponMetadataGenerated.set(entity);
});
