<script type="text/worker">
"use strict";
/* DATA */
const crewData = {
		
		marauders: {
			abilities: ["killers", "armed_and_ready", "hostis_humani_generis", "black_sails", "loose_cannons", "fiends", "blood_brothers"],
			base: {
				claim_1_desc: "claim_interrogation_chamber_description",
				claim_1_name: "claim_interrogation_chamber",
				claim_2_name: "claim_turf",
				claim_3_desc: "claim_loyal_fence_description",
				claim_3_name: "claim_loyal_fence",
				claim_4_desc: "claim_gambling_den_description",
				claim_4_name: "claim_gambling_den",
				claim_5_desc: "claim_tavern_description",
				claim_5_name: "claim_tavern",
				claim_6_desc: "claim_drug_den_description",
				claim_6_name: "claim_drug_den",
				claim_7_desc: "claim_informants_description",
				claim_7_name: "claim_informants",
				claim_9_name: "claim_turf",
				claim_10_desc: "claim_lookouts_description",
				claim_10_name: "claim_lookouts",
				claim_11_desc: "claim_hagfish_farm_description",
				claim_11_name: "claim_hagfish_farm",
				claim_12_desc: "claim_infirmary_description",
				claim_12_name: "claim_infirmary",
				claim_13_desc: "claim_covert_drops_description",
				claim_13_name: "claim_covert_drops",
				claim_14_name: "claim_turf",
				claim_15_desc: "claim_secret_pathways_description",
				claim_15_name: "claim_secret_pathways",
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: "crew_marauders_description",
				crew_xp_condition: "crew_marauders_xp_condition",
				hunting_grounds_type: "crew_marauders_hunting_grounds_type",
				hunting_grounds_description: "crew_marauders_hunting_grounds_description",
				upgrade_21_check_1: "on"
			},
			upgrades: [{
				name: 'crew_upgrade_bandoliers',
				numboxes: '1',
				tall: 'on'
			}, {
				name: 'crew_upgrade_letter_of_marque',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_elite_killers',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_elite_rovers',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_hardened',
				numboxes: '3'
			}]
		},
		phantoms: {
			abilities: ["accursed", "bound_in_darkness", "skeleton_crew", "derelict", "living_legends", "seven_seas", "sworn_to_service"],
			base: {
				claim_1_desc: "claim_interrogation_chamber_description",
				claim_1_name: "claim_interrogation_chamber",
				claim_2_name: "claim_turf",
				claim_3_desc: "claim_loyal_fence_description",
				claim_3_name: "claim_loyal_fence",
				claim_4_desc: "claim_gambling_den_description",
				claim_4_name: "claim_gambling_den",
				claim_5_desc: "claim_tavern_description",
				claim_5_name: "claim_tavern",
				claim_6_desc: "claim_drug_den_description",
				claim_6_name: "claim_drug_den",
				claim_7_desc: "claim_informants_description",
				claim_7_name: "claim_informants",
				claim_9_name: "claim_turf",
				claim_10_desc: "claim_lookouts_description",
				claim_10_name: "claim_lookouts",
				claim_11_desc: "claim_hagfish_farm_description",
				claim_11_name: "claim_hagfish_farm",
				claim_12_desc: "claim_infirmary_description",
				claim_12_name: "claim_infirmary",
				claim_13_desc: "claim_covert_drops_description",
				claim_13_name: "claim_covert_drops",
				claim_14_name: "claim_turf",
				claim_15_desc: "claim_secret_pathways_description",
				claim_15_name: "claim_secret_pathways",
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: "crew_phantoms_description",
				crew_xp_condition: "crew_phantoms_xp_condition",
				hunting_grounds_type: "crew_phantoms_hunting_grounds_type",
				hunting_grounds_description: "crew_phantoms_hunting_grounds_description",
				upgrade_22_check_1: "on",
				setting_show_purpose: "on"
			},
			upgrades: [{
				name: 'crew_upgrade_pouches',
				numboxes: '1',
				tall: 'on'
			}, {
				name: 'crew_upgrade_royal_covenant',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_elite_adepts',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_elite_rovers',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_doomed',
				numboxes: '3'
			}]
		},
		renegades: {
			abilities: ["scallywags", "devil's_own_luck", "scavengers", "crafty", "synchronized", "low_profile", "all_hands"],
			base: {
				claim_1_desc: "claim_interrogation_chamber_description",
				claim_1_name: "claim_interrogation_chamber",
				claim_2_name: "claim_turf",
				claim_3_desc: "claim_loyal_fence_description",
				claim_3_name: "claim_loyal_fence",
				claim_4_desc: "claim_gambling_den_description",
				claim_4_name: "claim_gambling_den",
				claim_5_desc: "claim_tavern_description",
				claim_5_name: "claim_tavern",
				claim_6_desc: "claim_drug_den_description",
				claim_6_name: "claim_drug_den",
				claim_7_desc: "claim_informants_description",
				claim_7_name: "claim_informants",
				claim_9_name: "claim_turf",
				claim_10_desc: "claim_lookouts_description",
				claim_10_name: "claim_lookouts",
				claim_11_desc: "claim_hagfish_farm_description",
				claim_11_name: "claim_hagfish_farm",
				claim_12_desc: "claim_infirmary_description",
				claim_12_name: "claim_infirmary",
				claim_13_desc: "claim_covert_drops_description",
				claim_13_name: "claim_covert_drops",
				claim_14_name: "claim_turf",
				claim_15_desc: "claim_secret_pathways_description",
				claim_15_name: "claim_secret_pathways",
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: "crew_renegades_description",
				crew_xp_condition: "crew_renegades_xp_condition",
				hunting_grounds_type: "crew_renegades_hunting_grounds_type",
				hunting_grounds_description: "crew_renegades_hunting_grounds_description",
				upgrade_23_check_1: "on"
			},
			upgrades: [{
				name: 'crew_upgrade_hidden_pockets',
				numboxes: '1',
				tall: 'on'
			}, {
				name: 'crew_upgrade_letter_of_marque',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_elite_knaves',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_elite_rovers',
				numboxes: '1'
			}, {
				name: 'crew_upgrade_fearless',
				numboxes: '3'
			}]
		}
	},
	playbookData = {
		commander: {
			abilities: ["iron_will", "self_control", "expertise", "sharpshooter", "tenacious", "master_and_commander", "ready_for_anything", "focused"],
			base: {
				command1: "1",
				command2: "1",
				friends_title: "playbook_commander_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_commander_description",
				reckon1: "1",
				setting_traumata_set: "normal",
				setting_vice_type: "normal",
				xp_condition: "playbook_commander_xp_condition"
			},
			items: [{
				bold: "on",
				name: "playbook_item_fine_rifle",
				numboxes: "1"
			}, {
				bold: "on",
				name: "playbook_item_fine_pistol",
				numboxes: "1"
			}, {
				bold: "on",
				name: "playbook_item_fine_navigational_tools",
				numboxes: "1"
			}, {
				name: 'playbook_item_documents',
				numboxes: '1',
				short: 'on'
			}, {
				name: 'playbook_item_books',
				description: 'a_pistol_description',
				numboxes: '2',
				short: 'on'
			}, {
				name: "playbook_item_personal_memento",
				numboxes: "0"
			}]
		},
		mariner: {
			abilities: ["in_fine_condition", "saboteur", "to_the_brink", "side_jobs", "shipshape", "sawbones", "no_rest_for_the_weary", "sturdy"],
			base: {
				friends_title: "playbook_mariner_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				navigate1: "1",
				navigate2: "1",
				patch1: "1",
				playbook_description: "playbook_mariner_description",
				setting_traumata_set: "normal",
				setting_vice_type: "normal",
				xp_condition: "playbook_mariner_xp_condition"
			},
			items: [{
				bold: "on",
				name: "playbook_item_fine_carpenter's_tools",
				numboxes: "1"
			}, {
				bold: "on",
				name: "playbook_item_fine_bottle_of_rum",
				numboxes: "1"
			}, {
				bold: "on",
				name: "playbook_item_fine_explosive",
				numboxes: "1"
			}, {
				name: "warding_talisman",
				numboxes: "0"
			}, {
				name: "trained_pet",
				numboxes: "1"
			}]
		},
		occultist: {
			abilities: ["from_the_deep", "tempest", "whispers_in_the_wind", "witch_doctor", "familiar", "black_spot", "born_in_brine", "warded"],
			base: {
				attune1: "1",
				attune2: "1",
				friends_title: "playbook_occultist_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_occultist_description",
				scan1: "1",
				setting_traumata_set: "normal",
				setting_vice_type: "normal",
				xp_condition: "playbook_occultist_xp_condition"
			},
			items: [{
				bold: "on",
				name: "playbook_item_fine_whalebone_knife",
				numboxes: "1"
			}, {
				bold: "on",
				name: "playbook_item_fine_warding_talisman",
				numboxes: "0"
			}, {
				name: "trained_pet",
				numboxes: "1"
			}, {
				name: "playbook_item_voodoo_doll",
				numboxes: "1"
			}, {
				name: "playbook_item_fanciful_map",
				numboxes: "0"
			}]
		},
		reaver: {
			abilities: ["not_without_a_fight", "resilient", "tough_as_nails", "fearsome_reputation", "armed_to_the_teeth", "savage", "right_bastard", "battleborn"],
			base: {
				brawl1: "1",
				brawl2: "1",
				command1: "1",
				friends_title: "playbook_reaver_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_reaver_description",
				setting_traumata_set: "normal",
				setting_vice_type: "normal",
				xp_condition: "playbook_reaver_xp_condition"
			},
			items: [{
				bold: "on",
				name: "playbook_item_fine_hand_weapon",
				numboxes: "1"
			}, {
				name: "playbook_item_brace_of_pistols",
				numboxes: "2"
			}, {
				name: "playbook_item_scary_weapon_or_tool",
				numboxes: "1"
			}, {
				name: "playbook_item_manacles_and_chain",
				numboxes: "1"
			}, {
				name: "warding_talisman",
				numboxes: "0"
			}]
		},
		scoundrel: {
			abilities: ["daredevil", "cloak_&_dagger", "reflexes", "savvy", "jack_of_all_trades", "trust_in_me", "against_the_odds", "irrepressible"],
			base: {
				charm1: "1",
				charm2: "1",
				friends_title: "playbook_scoundrel_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_scoundrel_description",
				setting_traumata_set: "normal",
				setting_vice_type: "normal",
				vault1: "1",
				xp_condition: "playbook_scoundrel_xp_condition"
			},
			items: [{
				bold: "on",
				name: "playbook_item_fine_blade",
				numboxes: "1"
			}, {
				bold: "on",
				name: "playbook_item_fine_set_of_clothes",
				numboxes: "1"
			}, {
				name: "playbook_item_loaded_dice",
				numboxes: "0"
			}, {
				name: "playbook_item_lockpicking_tools",
				numboxes: "0"
			}, {
				name: "warding_talisman",
				numboxes: "0"
			}]
		}
	},
	factionsData = {
		factions1: [{
				name: 'faction_the_unseen',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_the_hive',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_the_circle_of_flame',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_silver_nails',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_lord_scurlock',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_crows',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_lampblacks',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_red_sashes',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_dimmer_sisters',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_the_grinders',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_billhooks',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_wraiths',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_gray_cloaks',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_ulf_ironborn',
				tier: 'I',
				hold: 'S'
			},
			{
				name: 'faction_the_foghounds',
				tier: 'I',
				hold: 'W'
			},
			{
				name: 'faction_the_lost',
				tier: 'I',
				hold: 'W'
			}
		],
		factions2: [{
				name: 'faction_imperial_military',
				tier: 'VI',
				hold: 'S'
			},
			{
				name: 'faction_city_council',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_ministry_of_preservation',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_leviathan_hunters',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_ironhook_prison',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_sparkwrights',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_spirit_wardens',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_bluecoats',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_inspectors',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_iruvian_consulate',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_skovlan_consulate',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_the_brigade',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_severosi_consulate',
				tier: 'I',
				hold: 'S'
			},
			{
				name: 'faction_dagger_isles_consulate',
				tier: 'I',
				hold: 'S'
			}
		],
		factions3: [{
				name: 'faction_the_foundation',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_dockers',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_gondoliers',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_sailors',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_laborers',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_cabbies',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_cyphers',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_ink_rakes',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_rail_jacks',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_servants',
				tier: 'II',
				hold: 'W'
			}
		],
		factions4: [{
				name: 'faction_the_church_of_ecstasy',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_the_horde',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_path_of_echoes',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_forgotten_gods',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_the_reconciled',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_skovlander_refugees',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_the_weeping_lady',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_deathlands_scavengers',
				tier: 'II',
				hold: 'W'
			}
		],
		factions5: [{
				name: 'faction_whitecrown',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_brightstone',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_charterhall',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_six_towers',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_silkshore',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_nightmarket',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_crow\'s_foot',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_the_docks',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_barrowcleft',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_coalridge',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_charhollow',
				tier: 'I',
				hold: 'S'
			},
			{
				name: 'faction_dunslough',
				tier: 'I',
				hold: 'W'
			}
		]
	},
	actionData = {
		insight: [
			'patch',
			'navigate',
			'reckon',
			'scan'
		],
		prowess: [
			'blast',
			'brawl',
			'skulk',
			'vault'
		],
		resolve: [
			'attune',
			'charm',
			'command',
			'finesse'
		]
	},
	itemData = [{
			name: 'a_blade_or_two',
			description: 'a_blade_or_two_description',
			numboxes: '1'
		},
		{
			name: 'a_firearm',
			description: 'a_firearm_description',
			numboxes: '1'
		},
		{
			name: 'a_pistol',
			description: 'a_pistol_description',
			numboxes: '1',
			short: 'on'
		},
		{
			name: 'a_2nd_pistol',
			description: 'a_pistol_description',
			numboxes: '1',
			short: 'on'
		},
		{
			name: 'a_large_weapon',
			description: 'a_large_weapon_description',
			numboxes: '2'
		},
		{
			name: 'an_unusual_weapon',
			description: 'an_unusual_weapon_description',
			numboxes: '1'
		},
		{
			name: 'armor',
			description: 'armor_description',
			numboxes: '2',
			short: 'on'
		},
		{
			name: '+heavy',
			description: '+heavy_description',
			numboxes: '3',
			short: 'on'
		},
		{
			name: 'navigational_tools',
			description: 'navigational_tools_description',
			numboxes: '1'
		},
		{
			name: 'a_bottle_of_rum',
			description: 'a_bottle_of_rum_description',
			numboxes: '1'
		},
		{
			name: 'a_crude_explosive',
			description: 'a_crude_explosive_description',
			numboxes: '1'
		},
		{
			name: 'climbing_gear',
			description: 'climbing_gear_description',
			numboxes: '1'
		},
		{
			name: 'carpenter\'s_tools',
			description: 'carpenter\'s_tools_description',
			numboxes: '1'
		},
		{
			name: 'bandages',
			description: 'bandages_description',
			numboxes: '1'
		},
		{
			name: 'a_torch_or_lantern',
			description: 'a_torch_or_lantern_description',
			numboxes: '1'
		}
	],
	spiritPlaybooks = ['ghost', 'hull', 'vampire'],
	defaultValues = {
		cohort1_name: 'cohort',
		contacts_title: 'contacts',
		factions_title: 'factions_title',
		factions1_header: 'factions1',
		factions2_header: 'factions2',
		factions3_header: 'factions3',
		factions4_header: 'factions4',
		factions5_header: 'factions5',
		frame: 'frame',
		friends_title: 'friends',
		setting_stress_label: 'stress',
		setting_trauma_label: 'trauma',
		upgrade_6_name: 'coffers',
		upgrade_6_description: 'upgrade_coffers_description',
		upgrade_7_name: 'cannons',
		upgrade_7_description: 'upgrade_cannons_description',
		upgrade_8_name: 'boltholes',
		upgrade_8_description: 'upgrade_boltholes_description',
		upgrade_9_name: 'hull',
		upgrade_9_description: 'upgrade_hull_description',
		upgrade_10_name: 'hidden_cannons',
		upgrade_10_description: 'upgrade_hidden_cannons_description',
		upgrade_11_name: 'sails',
		upgrade_11_description: 'upgrade_sails_description',
		upgrade_12_name: 'overgunned',
		upgrade_12_description: 'upgrade_overgunned_description',
		upgrade_13_name: 'rudder',
		upgrade_13_description: 'upgrade_rudder_description',
		upgrade_14_name: 'prow_ram',
		upgrade_14_description: 'upgrade_prow_ram_description',
		upgrade_15_name: 'charts',
		upgrade_15_description: 'upgrade_charts_description',
		upgrade_16_name: 'specialty_shot',
		upgrade_16_description: 'upgrade_specialty_shot_description',
		upgrade_17_name: 'tools',
		upgrade_17_description: 'upgrade_tools_description',
		upgrade_18_name: 'retractable_keel',
		upgrade_18_description: 'upgrade_retractable_keel_description',
		upgrade_19_name: 'weapons',
		upgrade_19_description: 'upgrade_weapons_description',
		upgrade_20_name: 'insight',
		upgrade_20_description: 'upgrade_insight_description',
		upgrade_21_name: 'prowess',
		upgrade_21_description: 'upgrade_prowess_description',
		upgrade_22_name: 'resolve',
		upgrade_22_description: 'upgrade_resolve_description',
		upgrade_23_name: 'personal',
		upgrade_23_description: 'upgrade_personal_description',
		upgrade_24_name: 'mastery',
		upgrade_24_description: 'upgrade_mastery_description',
		xp_condition2: 'xp_beliefs',
		xp_condition3: 'xp_vice'
	};
/* NECESSARY DATA TRANSFORMATION */
/* Translate crewData */
Object.keys(crewData).forEach(crew => {
	const base = crewData[crew].base,
		translatedBaseAttributes = [
			...[...Array(16).keys()].slice(1).map(i => `claim_${i}_name`),
			...[...Array(16).keys()].slice(1).map(i => `claim_${i}_desc`),
			'cohort1_name',
			'cohort1_subtype',
			'crew_description',
			'crew_xp_condition',
			'hunting_grounds_type',
			'hunting_grounds_description',
			'upgrade_6_name',
			'upgrade_8_name'
		];
	Object.keys(base).forEach(attr => {
		if (translatedBaseAttributes.includes(attr)) {
			base[attr] = getTranslationByKey(base[attr]);
		}
	});
	crewData[crew].contacts = [...Array(6).keys()].map(i => ({
		name: getTranslationByKey(`crew_${crew}_contact_${i}`)
	}));
	crewData[crew].abilities = crewData[crew].abilities.map(name => ({
		name: getTranslationByKey(`crew_ability_${name}`),
		description: getTranslationByKey(`crew_ability_${name}_description`)
	}));
	crewData[crew].upgrades.forEach(upgrade => {
		upgrade.name = getTranslationByKey(upgrade.name);
		upgrade.boxes_chosen = 'on';
	});
});
/* Translate itemData */
itemData.forEach(item => {
	item.boxes_chosen = 'on';
	item.name = getTranslationByKey(item.name);
	item.description = getTranslationByKey(item.description);
});
/* Translate defaultValues */
Object.keys(defaultValues).forEach(k => {
	defaultValues[k] = getTranslationByKey(defaultValues[k]);
});
/* Translate factions */
Object.keys(factionsData).forEach(x => {
	factionsData[x].forEach(faction => {
		faction.name = getTranslationByKey(faction.name);
	});
});
/* Translate playbooks */
Object.keys(playbookData).forEach(playbook => {
	const base = playbookData[playbook].base,
		translatedBaseAttributes = [
			'friends_title',
			'gatherinfo1',
			'gatherinfo2',
			'gatherinfo3',
			'gatherinfo4',
			'gatherinfo5',
			'gatherinfo6',
			'playbook_description',
			'setting_stress_label',
			'setting_trauma_label',
			'xp_condition',
			'xp_condition2',
			'xp_condition3'
		];
	Object.keys(base).forEach(attr => {
		if (translatedBaseAttributes.includes(attr)) {
			base[attr] = getTranslationByKey(base[attr]);
		}
	});
	playbookData[playbook].friends = [...Array(5).keys()]
		.filter(i => getTranslationByKey(`playbook_${playbook}_friend_${i}`))
		.map(i => ({
			name: getTranslationByKey(`playbook_${playbook}_friend_${i}`)
		}));
	playbookData[playbook].abilities = playbookData[playbook].abilities.map(name => ({
		name: getTranslationByKey(`playbook_ability_${name}`),
		description: getTranslationByKey(`playbook_ability_${name}_description`)
	}));
	playbookData[playbook].items.forEach(item => {
		item.name = getTranslationByKey(item.name);
		item.boxes_chosen = 'on';
	});
});
/* UTILITY FUNCTIONS */
const setDiceFromTotal = (name, numDice, upToFive, value) => {
		value = value || 1;
		const setting = {};
		setting[`${name}1`] = (numDice > 0) ? value : 0;
		setting[`${name}2`] = (numDice > 1) ? value : 0;
		setting[`${name}3`] = (numDice > 2) ? value : 0;
		setting[`${name}4`] = (numDice > 3) ? value : 0;
		if (upToFive) {
			setting[`${name}5`] = (numDice > 4) ? value : 0;
		}
		setAttrs(setting);
	},
	fillRepeatingSectionFromData = (sectionName, dataList, autoGenerated, callback) => {
		callback = callback || (() => {});
		getSectionIDs(`repeating_${sectionName}`, idList => {
			const rowNameAttributes = idList.map(id => `repeating_${sectionName}_${id}_name`);
			getAttrs(rowNameAttributes, v => {
				const existingRows = Object.keys(v).map(x => v[x]),
					createdIDs = [];
				const setting = dataList.filter(o => !existingRows.includes(o.name))
					.map(o => {
						let rowID;
						while (!rowID) {
							let newID = generateRowID();
							if (!createdIDs.includes(newID)) {
								rowID = newID;
								createdIDs.push(rowID);
							}
						}
						const newAttrs = {};
						if (autoGenerated) {
							newAttrs[`repeating_${sectionName}_${rowID}_autogen`] = '1';
						}
						return Object.keys(o).reduce((m, key) => {
							m[`repeating_${sectionName}_${rowID}_${key}`] = o[key];
							return m;
						}, newAttrs);
					})
					.reduce((m, o) => Object.assign(m, o), {});
				setAttrs(setting, {}, callback);
			});
		});
	},
	emptyFirstRowIfUnnamed = sectionName => {
		getSectionIDs(`repeating_${sectionName}`, idList => {
			const id = idList[0];
			getAttrs([`repeating_${sectionName}_${id}_name`], v => {
				if (!v[`repeating_${sectionName}_${id}_name`]) {
					removeRepeatingRow(`repeating_${sectionName}_${id}`);
				}
			});
		});
	},
	deleteAutogenRows = (sectionName, callback) => {
		callback = callback || (() => {});
		getSectionIDs(`repeating_${sectionName}`, idList => {
			getAttrs(idList.map(id => `repeating_${sectionName}_${id}_autogen`), v => {
				idList.forEach(id => {
					if (v[`repeating_${sectionName}_${id}_autogen`]) {
						removeRepeatingRow(`repeating_${sectionName}_${id}`);
					}
				});
				callback();
			});
		});
	};
/* DEFAULT FILLS FOR PLAYBOOKS AND CREWS */
/* Watch repeating rows for changes and set autogen to false if change happens*/
const repeatingSectionsToWatchForAutogen = ['ability', 'crewability', 'friend', 'contact', 'playbookitem', 'upgrade'];
repeatingSectionsToWatchForAutogen.forEach(sectionName => {
	on(`change:repeating_${sectionName}`, eventInfo => {
		const idMatch = eventInfo.sourceAttribute.match(new RegExp(`^repeating_${sectionName}_(.*?)_`)),
			id = idMatch && idMatch[1];
		if (id && eventInfo.sourceType === 'player') {
			const setting = {};
			setting[`repeating_${sectionName}_${id}_autogen`] = '';
			setAttrs(setting);
		}
	});
});
/* Set some default fields when setting crew type or playbook */
const crewAttributes = [...new Set([].concat(...Object.keys(crewData).map(x => Object.keys(crewData[x].base))))],
	playbookAttributes = [...new Set([].concat(...Object.keys(playbookData).map(x => Object.keys(playbookData[x].base))))],
	watchedAttributes = new Set([].concat(crewAttributes, playbookAttributes));
on('change:crew_type change:playbook', event => {
	getAttrs(['crew_type', 'playbook', 'changed_attributes'], v => {
		const changedAttributes = (v.changed_attributes || '').split(',');
		let data, baseData, sourceName;
		if (v.playbook || v.crew_type) {
			setAttrs({
				show_playbook_reminder: '0'
			});
		}
		switch (event.sourceAttribute) {
		case 'crew_type':
			sourceName = v.crew_type.toLowerCase();
			if (crewData.hasOwnProperty(sourceName)) {
				data = crewData[sourceName].base;
				baseData = crewAttributes;
				deleteAutogenRows('contact', () => fillRepeatingSectionFromData('contact', crewData[sourceName].contacts, true));
				deleteAutogenRows('crewability', () => fillRepeatingSectionFromData('crewability', crewData[sourceName].abilities, true));
				deleteAutogenRows('upgrade', () => fillRepeatingSectionFromData('upgrade', crewData[sourceName].upgrades, true));
			}
			break;
		case 'playbook':
			sourceName = v.playbook.toLowerCase();
			if (playbookData.hasOwnProperty(sourceName)) {
				data = playbookData[sourceName].base;
				baseData = playbookAttributes;
				deleteAutogenRows('friend', () => fillRepeatingSectionFromData('friend', playbookData[sourceName].friends, true));
				deleteAutogenRows('ability', () => fillRepeatingSectionFromData('ability', playbookData[sourceName].abilities, true));
				deleteAutogenRows('playbookitem', () => fillRepeatingSectionFromData('playbookitem', playbookData[sourceName].items, true));
			}
		}
		/* Change unset attributes to default */
		if (data) {
			const finalSettings = {};
			if (!spiritPlaybooks.includes(sourceName)) {
				baseData.filter(name => !changedAttributes.includes(name))
					.forEach(name => (finalSettings[name] = defaultValues[name] || ''));
			}
			Object.keys(data).filter(name => !changedAttributes.includes(name))
				.forEach(name => (finalSettings[name] = data[name]));
			setAttrs(finalSettings);
		}
	});
});
/* Watch for changes in auto-set attributes */
watchedAttributes.forEach(name => {
	on(`change:${name}`, eventInfo => {
		if (eventInfo.sourceType === 'player') {
			getAttrs(['changed_attributes'], v => {
				const changedAttributes = [...new Set(v.changed_attributes.split(',').concat(name))].filter(x => !!x).join(',');
				setAttrs({
					changed_attributes: changedAttributes
				});
			});
		}
	});
});
/* DERIVED DICE NUMBERS */
const actions1 = Object.keys(actionData).reduce((m, k) => {
		m[k] = actionData[k].map(s => `${s}1`);
		return m;
	}, {}),
	actionsFlat = [].concat(...Object.keys(actionData).map(x => actionData[x])),
	actions1Flat = actionsFlat.map(str => str + '1'),
	calculateResistance = name => {
		getAttrs(actions1[name], v => {
			const numDice = Object.keys(v).map(x => v[x]).reduce((s, c) => s + parseInt(c || 0), 0);
			setDiceFromTotal(name, numDice);
		});
	},
	calculateVice = () => {
		getAttrs(actions1Flat, v => {
			const numDice = Math.min(...Object.keys(actions1).map(name => {
				return actions1[name].reduce((s, str) => s + parseInt(v[str] || 0), 0);
			}));
			setDiceFromTotal('vice', numDice);
		});
	};
/* Register attribute/action event handlers */
Object.keys(actionData).forEach(attributeName => {
	actionData[attributeName].forEach(actionName => {
		on(`change:${actionName}1`, () => calculateResistance(attributeName));
	});
	on([1, 2, 3, 4].map(x => `change:${attributeName}${x}`).join(' '), calculateVice);
});
/* CALCULATE WANTED */
on('change:wanted', () => {
	getAttrs(['wanted'], v => {
		setDiceFromTotal('wanted', parseInt(v.wanted));
	});
});
/* CALCULATE STASH */
const calculateStash = () => {
	getAttrs(['stash'], v => {
		setDiceFromTotal('stash', Math.floor(parseInt(v.stash) / 10));
	});
};
on('change:stash', calculateStash);
/* GENERATE FACTIONS */
on('change:generate_factions', () => {
	Object.keys(factionsData).forEach(sectionName => {
		fillRepeatingSectionFromData(sectionName, factionsData[sectionName]);
	});
});
/* GENERATE ABILITIES */
on('change:generate_abilities', () => {
	getAttrs(['generate_source'], v => {
		let sectionName, dataList;
		if (crewData.hasOwnProperty(v.generate_source)) {
			sectionName = 'crewability';
			dataList = crewData[v.generate_source].abilities;
		}
		else if (playbookData.hasOwnProperty(v.generate_source)) {
			sectionName = 'ability';
			dataList = playbookData[v.generate_source].abilities;
		}
		emptyFirstRowIfUnnamed(sectionName);
		fillRepeatingSectionFromData(sectionName, dataList);
	});
});
/* GENERATE FRIENDS */
on('change:generate_friends', () => {
	getAttrs(['generate_source'], v => {
		let sectionName, dataList;
		if (crewData.hasOwnProperty(v.generate_source)) {
			sectionName = 'contact';
			dataList = crewData[v.generate_source].contacts;
		}
		else if (playbookData.hasOwnProperty(v.generate_source)) {
			sectionName = 'friend';
			dataList = playbookData[v.generate_source].friends;
		}
		emptyFirstRowIfUnnamed(sectionName);
		fillRepeatingSectionFromData(sectionName, dataList);
	});
});
/* EXTRA STRESS BOXES */
on('change:setting_extra_stress', () => {
	getAttrs(['setting_extra_stress'], v => {
		setDiceFromTotal('setting_extra_stress', parseInt(v.setting_extra_stress), true, 'on');
	});
});
/* CALCULATE COHORT QUALITY */
const calculateCohortDots = (t1, t2, t3, t4, imp, type, prefix) => {
		let numDots = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4);
		if (imp === 'on') {
			numDots = numDots - 1;
		}
		if (type === 'elite' || type === 'expert') {
			numDots = numDots + 1;
		}
		setDiceFromTotal(`${prefix}die`, numDots, true);
	},
	qualityAttrs = ['crew_tier1', 'crew_tier2', 'crew_tier3', 'crew_tier4', 'cohort1_impaired', 'cohort1_type'],
	qualityEvent = qualityAttrs.map(x => `change:${x}`).join(' '),
	repeatingQualityAttrs = ['crew_tier1', 'crew_tier2', 'crew_tier3', 'crew_tier4', 'repeating_cohort:impaired', 'repeating_cohort:type'],
	repeatingQualityEvent = repeatingQualityAttrs.map(x => `change:${x}`).join(' ');
on(qualityEvent, () => {
	getAttrs(qualityAttrs, v => {
		calculateCohortDots(v.crew_tier1, v.crew_tier2, v.crew_tier3, v.crew_tier4, v.cohort1_impaired, v.cohort1_type, 'cohort1_');
	});
});
on(repeatingQualityEvent + ' ' + ['name', 'subtype', 'edges', 'flaws', 'description'].map(x => `change:repeating_cohort:${x}`).join(' '), () => {
	getSectionIDs('repeating_cohort', list => {
		list.forEach(id => {
			const attrList = repeatingQualityAttrs.map(str => str.replace(':', `_${id}_`));
			getAttrs(attrList, v => {
				calculateCohortDots(v.crew_tier1, v.crew_tier2, v.crew_tier3, v.crew_tier4, v[attrList[4]], v[attrList[5]], `repeating_cohort_${id}_`);
			});
		});
	});
});
/* LEFT-FILL CHECKBOXES */
const handleBoxesFill = (name, activeValue, upToFour) => {
	on(`change:${name}1 change:${name}2 change:${name}3 change:${name}4`, event => {
		getAttrs([event.sourceAttribute], v => {
			const rName = event.sourceAttribute.slice(0, -1),
				setting = {};
			if (v[event.sourceAttribute] === activeValue) {
				switch (event.sourceAttribute.slice(-1)) {
				case '4':
					setting[`${rName}3`] = activeValue;
				case '3':
					setting[`${rName}2`] = activeValue;
				case '2':
					setting[`${rName}1`] = activeValue;
				}
			}
			if (v[event.sourceAttribute] === '0') {
				switch (event.sourceAttribute.slice(-1)) {
				case '1':
					setting[`${rName}2`] = '0';
				case '2':
					setting[`${rName}3`] = '0';
				case '3':
					if (upToFour) setting[`${rName}4`] = '0';
				}
			}
			setAttrs(setting);
		});
	});
};
/* Action ratings */
actionsFlat.forEach(action => handleBoxesFill(action, '1', true));
/* Crew Tier */
handleBoxesFill('crew_tier', '1', true);
handleBoxesFill('upgrade_24_check_', 'on', true);
handleBoxesFill('bandolier1_check_', 'on');
handleBoxesFill('bandolier2_check_', 'on');
/* Items/Upgrades */
['item', 'playbookitem', 'upgrade'].forEach(sectionName => {
	handleBoxesFill(`repeating_${sectionName}:check_`, 'on');
});
/* INITIALISATION AND UPGRADES */
on('sheet:opened', () => {
	getAttrs(['sheet_type', 'changed_attributes', 'crew_type', 'playbook'], v => {
		/* Make sure sheet_type is never 0 */
		if (!['character', 'crew', 'faction'].includes(v.sheet_type)) {
			setAttrs({
				sheet_type: 'character'
			});
		}
		/* Remove reminder box if we have playbook or crew name */
		if (v.playbook || v.crew_type) {
			setAttrs({
				show_playbook_reminder: '0'
			});
		}
	});
	/* Set up translated queries */
	setAttrs({
		bonusdice: `?{${getTranslationByKey('bonusdice')}}`,
		bonusdice_long: `?{${getTranslationByKey('bonusdice')}|0|1|2|3|4|5|6|-1|-2|-3}`,
		effect_query: getTranslationByKey('effect_query'),
		notes_query: `?{${getTranslationByKey('notes')}|}`,
		numberofdice: `?{${getTranslationByKey('numberofdice')}}`,
		numberofdice_long: `?{${getTranslationByKey('numberofdice')}|0|1|2|3|4|5|6}`,
		position_query: `?{Position|${getTranslationByKey('risky')},position=${getTranslationByKey('risky')}|` +
			`${getTranslationByKey('controlled')},position=${getTranslationByKey('controlled')}|` +
			`${getTranslationByKey('desperate')},position=${getTranslationByKey('desperate')}|` +
			`${getTranslationByKey('fortune_roll')},position=}`
	});
	/* Setup and upgrades */
	getAttrs(['version'], v => {
		const upgradeSheet = version => {
			const versionMajor = version && parseInt(version.split('.')[0]),
				versionMinor = version && parseInt(version.split('.')[1]);
			// Initialise a new sheet
			if (!version) {
				const setting = ['ability', 'friend', 'crewability', 'contact']
					.reduce((memo, sectionName) => {
						memo[`repeating_${sectionName}_${generateRowID()}_autogen`] = 1;
						return memo;
					}, {});
				setAttrs(setting);
				fillRepeatingSectionFromData('item', itemData);
				/* Set translated default values */
				setAttrs(defaultValues);
				console.log('Initialising new sheet');
			}
			// Upgrade to 0.7: Convert legacy faction repeating section to text
			else if (versionMajor === 0 && versionMinor < 7) {
				getSectionIDs('repeating_faction', list => {
					const sectionList = ['faction1', 'faction2'].concat(list.map(str => `repeating_faction_${str}`)),
						attrList = [].concat(...sectionList.map(str => [`${str}_name`, `${str}_status`, `${str}_description`]));
					getAttrs(attrList, v => {
						const output = sectionList.map(str => {
							return 'Name: ' + v[`${str}_name`] + '\n' +
								'Status: ' + (v[`${str}_status`] || '') + '\n' +
								'Notes: ' + (v[`${str}_description`] || '') + '\n';
						}).join('\n');
						setAttrs({
							faction_notes: output
						});
						list.forEach(id => removeRepeatingRow(`repeating_faction_${id}`));
						upgradeSheet('0.7');
						console.log('Updating to 0.7');
					});
				});
			}
			// Upgrade to 0.9: Convert ability/friend/crewability/contact first row
			else if (versionMajor === 0 && versionMinor < 9) {
				const upgradeFunction = _.after(4, () => upgradeSheet('0.9')),
					attrs = ['ability1_check', 'ability1_name', 'ability1_description',
						'friend1_status', 'friend1_name',
						'crew_ability1_check', 'crew_ability1_name', 'crew_ability1_description',
						'contact1_check', 'contact1_name'
					];
				getAttrs(attrs, v => {
					fillRepeatingSectionFromData('ability', [{
						check: v.ability1_check || '0',
						description: v.ability1_description || '',
						name: v.ability1_name || ''
					}], false, upgradeFunction);
					fillRepeatingSectionFromData('friend', [{
						name: v.friend1_name || '',
						status: v.friend1_status || ''
					}], false, upgradeFunction);
					fillRepeatingSectionFromData('crewability', [{
						check: v.crew_ability1_check || '0',
						description: v.crew_ability1_description || '',
						name: v.crew_ability1_name || ''
					}], false, upgradeFunction);
					fillRepeatingSectionFromData('contact', [{
						check: v.contact1_check || '0',
						name: v.contact1_name || ''
					}], false, upgradeFunction);
					console.log('Updating to 0.9');
				});
			}
			// Upgrade to 1.0: Make sure that resistance values are calculated correctly.
			else if (versionMajor === 0) {
				Object.keys(actionData).forEach(calculateResistance);
				calculateVice();
				upgradeSheet('1.0');
				console.log('Updating to 1.0');
			}
			// Upgrade to 1.4: Convert playbook items and repeating items
			else if (versionMajor === 1 && versionMinor < 4) {
				const upgradeFunction = _.after(2, () => upgradeSheet('1.4')),
					indices = [...Array(10).keys()], // [0:9]
					allAttrs = [
						...indices.map(n => `item_${n}_check`),
						...indices.map(n => `item_${n}_desc`),
						'item_0_check_b',
						'item_0_check_c',
						'item_1_check_b'
					];
				getAttrs(allAttrs, v => {
					const items = [];
					if (v.item_0_desc) {
						items.push({
							check_1: v.item_0_check || '0',
							name: v.item_0_desc,
							numboxes: '1'
						});
						items.push({
							check_1: v.item_0_check_b || '0',
							name: v.item_0_desc,
							numboxes: '1'
						});
						items.push({
							check_1: v.item_0_check_c || '0',
							name: v.item_0_desc,
							numboxes: '1'
						});
					}
					if (v.item_1_desc) {
						items.push({
							bold: 'on',
							check_1: v.item_1_check || '0',
							check_2: v.item_1_check_b || '0',
							name: v.item_1_desc,
							numboxes: '2'
						});
					}
					['2', '3', '5', '6'].forEach(index => {
						if (v[`item_${index}_desc`]) {
							items.push({
								bold: (['2', '3'].includes(index) ? 'on' : '0'),
								check_1: v[`item_${index}_check`] || '0',
								name: v[`item_${index}_desc`],
								numboxes: '1'
							});
						}
					});
					['4', '7', '8', '9'].forEach(index => {
						if (v[`item_${index}_desc`]) {
							items.push({
								bold: ((index === '4') ? 'on' : '0'),
								check_1: v[`item_${index}_check`] || '0',
								name: v[`item_${index}_desc`],
								numboxes: '0'
							});
						}
					});
					items.forEach(obj => {
						obj.boxes_chosen = 'on';
					});
					fillRepeatingSectionFromData('playbookitem', items, false, upgradeFunction);
				});
				getSectionIDs('repeating_item', idArray => {
					const allAttrs = [
						...idArray.map(id => `repeating_item_${id}_desc`),
						...idArray.map(id => `repeating_item_${id}_check`),
						...idArray.map(id => `repeating_item_${id}_check_b`)
					];
					getAttrs(allAttrs, v => {
						const setting = {};
						idArray.forEach(id => {
							setting[`repeating_item_${id}_boxes_chosen`] = 'on';
							setting[`repeating_item_${id}_numboxes`] = '2';
							setting[`repeating_item_${id}_name`] = v[`repeating_item_${id}_desc`] || '';
							setting[`repeating_item_${id}_check_1`] = v[`repeating_item_${id}_check`] || '0';
							setting[`repeating_item_${id}_check_2`] = v[`repeating_item_${id}_check_b`] || '0';
						});
						setAttrs(setting, {}, upgradeFunction);
						console.log('Updating to 1.4');
					});
				});
			}
			// Upgrade to 1.5: Convert items
			else if (versionMajor === 1 && versionMinor < 5) {
				const indices = [...Array(25).keys()].slice(10),
					allAttrs = [
						...indices.map(n => `item_${n}_check`),
						...indices.map(n => `item_${n}_desc`),
						'item_14_check_b',
						'item_16_check_b',
						'item_16_check_c',
						'item_16_check_d',
						'item_16_check_e',
						'item_18_check_b',
						'item_22_check_b'
					];
				getAttrs(allAttrs, v => {
					const items = [{
							check_1: (v.item_10_check || '0'),
							name: (v.item_10_desc || 'A Blade or Two'),
							numboxes: '1'
						},
						{
							check_1: (v.item_11_check || '0'),
							name: (v.item_11_desc || 'Throwing Knives'),
							numboxes: '1'
						},
						{
							check_1: (v.item_12_check || '0'),
							name: (v.item_12_desc || 'A Pistol'),
							numboxes: '1',
							short: 'on'
						},
						{
							check_1: (v.item_13_check || '0'),
							name: (v.item_13_desc || 'A 2nd Pistol'),
							numboxes: '1',
							short: 'on'
						},
						{
							check_1: (v.item_14_check || '0'),
							check_2: (v.item_14_check_b || '0'),
							name: (v.item_14_desc || 'A Large Weapon'),
							numboxes: '2'
						},
						{
							check_1: (v.item_15_check || '0'),
							name: (v.item_15_desc || 'An Unusual Weapon'),
							numboxes: '1'
						},
						{
							check_1: (v.item_16_check || '0'),
							check_2: (v.item_16_check_b || '0'),
							name: (v.item_16_desc || 'Armor'),
							numboxes: '2',
							short: 'on'
						},
						{
							check_1: (v.item_16_check_c || '0'),
							check_2: (v.item_16_check_d || '0'),
							check_3: (v.item_16_check_e || '0'),
							name: (v.item_16_desc_b || '+Heavy'),
							numboxes: '3',
							short: 'on'
						},
						{
							check_1: (v.item_17_check || '0'),
							name: (v.item_17_desc || 'Burglary Gear'),
							numboxes: '1'
						},
						{
							check_1: (v.item_18_check || '0'),
							name: (v.item_18_desc || 'Climbing Gear'),
							numboxes: '2'
						},
						{
							check_1: (v.item_19_check || '0'),
							name: (v.item_19_desc || 'Arcane Implements'),
							numboxes: '1'
						},
						{
							check_1: (v.item_20_check || '0'),
							name: (v.item_20_desc || 'Documents'),
							numboxes: '1'
						},
						{
							check_1: (v.item_21_check || '0'),
							name: (v.item_21_desc || 'Subterfuge Supplies'),
							numboxes: '1'
						},
						{
							check_1: (v.item_22_check || '0'),
							check_2: (v.item_22_check_b || '0'),
							name: (v.item_22_desc || 'Demolition Tools'),
							numboxes: '2'
						},
						{
							check_1: (v.item_23_check || '0'),
							name: (v.item_23_desc || 'Tinkering Tools'),
							numboxes: '1'
						},
						{
							check_1: (v.item_24_check || '0'),
							name: (v.item_24_desc || 'Lantern'),
							numboxes: '1'
						}
					];
					items.forEach(obj => {
						obj.boxes_chosen = 'on';
					});
					fillRepeatingSectionFromData('item', items, false, () => upgradeSheet('1.5'));
					console.log('Updating to 1.5');
				});
			}
			// Upgrade to 1.6: Set defaults, convert upgrade names
			else if (versionMajor === 1 && versionMinor < 6) {
				const upgradeFunction = _.after(3, () => upgradeSheet('1.6')),
					upgradeNums = [...Array(25).keys()].slice(1).filter(x => x !== 19),
					upgradeAttrs = [
						...upgradeNums.map(x => `upgrade_${x}_desc`),
						...upgradeNums.map(x => `upgrade_${x}_check`),
						'upgrade_1_check_b',
						'upgrade_1_check_c',
						'upgrade_2_tall',
						'upgrade_3_tall',
						'upgrade_6_check_b',
						'upgrade_8_check_b',
						'upgrade_14_check_b',
						'upgrade_16_check_b',
						'upgrade_24_check_b',
						'upgrade_24_check_c',
						'upgrade_24_check_d',
						...Object.keys(defaultValues)
					];
				getAttrs(upgradeAttrs, v => {
					// Repeating / specific upgrades
					const upgrades = [{
						check_1: v.upgrade_1_check || '0',
						check_2: v.upgrade_1_check_b || '0',
						check_3: v.upgrade_1_check_c || '0',
						name: v.upgrade_1_desc || '',
						numboxes: '3'
					}, {
						check_1: v.upgrade_2_check || '0',
						name: v.upgrade_2_desc || '',
						numboxes: '1',
						tall: v.upgrade_2_tall || '0'
					}, {
						check_1: v.upgrade_3_check || '0',
						name: v.upgrade_3_desc || '',
						numboxes: '1',
						tall: v.upgrade_3_tall || '0'
					}, {
						check_1: v.upgrade_4_check || '0',
						name: v.upgrade_4_desc || '',
						numboxes: '1'
					}, {
						check_1: v.upgrade_5_check || '0',
						name: v.upgrade_5_desc || '',
						numboxes: '1'
					}];
					upgrades.forEach(obj => {
						obj.boxes_chosen = 'on';
					});
					getSectionIDs('upgrade', idList => {
						const allAttrs = [
							...idList.map(x => `repeating_upgrade_${x}_desc`),
							...idList.map(x => `repeating_upgrade_${x}_check`),
							...idList.map(x => `repeating_upgrade_${x}_check_b`)
						];
						getAttrs(allAttrs, v => {
							const setting = {};
							idList.forEach(id => {
								setting[`repeating_upgrade_${id}_name`] = v[`repeating_upgrade_${id}_desc`] || '';
								setting[`repeating_upgrade_${id}_check_1`] = v[`repeating_upgrade_${id}_check`] || '';
								setting[`repeating_upgrade_${id}_check_2`] = v[`repeating_upgrade_${id}_check_b`] || '';
								setting[`repeating_upgrade_${id}_numboxes`] = '2';
								setting[`repeating_upgrade_${id}_boxes_chosen`] = 'on';
							});
							setAttrs(setting, {}, upgradeFunction);
							fillRepeatingSectionFromData('upgrade', upgrades, false, upgradeFunction);
						});
					});
					// Common upgrades
					const setting = {};
					upgradeNums.slice(5).forEach(index => {
						setting[`upgrade_${index}_name`] = v[`upgrade_${index}_desc`] || '';
						setting[`upgrade_${index}_check_1`] = v[`upgrade_${index}_check`] || '0';
					});
					setting.upgrade_6_check_2 = v.upgrade_6_check_b || '0';
					setting.upgrade_8_check_2 = v.upgrade_8_check_b || '0';
					setting.upgrade_14_check_2 = v.upgrade_14_check_b || '0';
					setting.upgrade_16_check_2 = v.upgrade_16_check_b || '0';
					setting.upgrade_24_check_2 = v.upgrade_24_check_b || '0';
					setting.upgrade_24_check_3 = v.upgrade_24_check_c || '0';
					setting.upgrade_24_check_4 = v.upgrade_24_check_d || '0';
					Object.keys(defaultValues).forEach(k => {
						setting[k] = v[k] || setting[k] || defaultValues[k];
					});
					setAttrs(setting, {}, upgradeFunction);
					console.log('Updating to 1.6');
				});
			}
			// Upgrade to 1.9: Add missing upgrade descriptions, convert bandolier checks
			else if (versionMajor === 1 && versionMinor < 9) {
				const upgradeFunction = _.after(2, () => upgradeSheet('1.9')),
					upgradeNums = [...Array(25).keys()].slice(1).filter(x => x !== 19).slice(5),
					upgradeDescriptions = upgradeNums.map(x => `upgrade_${x}_description`),
					attrs = [
						...upgradeDescriptions,
						'bandolier1_check',
						'bandolier1_check_b',
						'bandolier1_check_c',
						'bandolier2_check',
						'bandolier2_check_b',
						'bandolier2_check_c'
					];
				getAttrs(attrs, v => {
					const setting = {};
					upgradeDescriptions.forEach(name => {
						setting[name] = v[name] || defaultValues[name];
					});
					setting.bandolier1_check_1 = v.bandolier1_check || '0';
					setting.bandolier1_check_2 = v.bandolier1_check_b || '0';
					setting.bandolier1_check_3 = v.bandolier1_check_c || '0';
					setting.bandolier2_check_1 = v.bandolier2_check || '0';
					setting.bandolier2_check_2 = v.bandolier2_check_b || '0';
					setting.bandolier2_check_3 = v.bandolier2_check_c || '0';
					calculateStash();
					setAttrs(setting, {}, upgradeFunction);
				});
				getSectionIDs('item', idArray => {
					const attrs = [
						...idArray.map(id => `repeating_item_${id}_name`),
						...idArray.map(id => `repeating_item_${id}_description`)
					];
					getAttrs(attrs, v => {
						const setting = {};
						idArray.forEach(id => {
							const k = _.findIndex(itemData, item => item.name === v[`repeating_item_${id}_name`]);
							if (k >= 0 && !v[`repeating_item_${id}_description`]) {
								setting[`repeating_item_${id}_description`] = itemData[k].description;
							}
						});
						setAttrs(setting, {}, upgradeFunction);
						console.log('Updating to 1.9');
					});
				});
			}
		};
		upgradeSheet(v.version);
		// Set version number
		setAttrs({
			version: '1.9',
			character_sheet: 'Blades in the Dark v1.9'
		});
	});
});
</script>
