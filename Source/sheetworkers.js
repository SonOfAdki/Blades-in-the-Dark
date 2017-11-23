<script type="text/worker">
"use strict";
/* DATA */
const sheetVersion = "2.5",
	crewData = {
		marauders: {
			base: {
				claim_1_desc: "claim_training_rooms_description",
				claim_1_name: "claim_training_rooms",
				claim_2_desc: "claim_vice_den_description",
				claim_2_name: "claim_vice_den",
				claim_3_desc: "claim_fixer_description",
				claim_3_name: "claim_fixer",
				claim_4_desc: "claim_informants_description",
				claim_4_name: "claim_informants",
				claim_5_desc: "claim_hagfish_farm_description",
				claim_5_name: "claim_hagfish_farm",
				claim_6_desc: "claim_victim_trophies_description",
				claim_6_name: "claim_victim_trophies",
				claim_7_name: "claim_turf",
				claim_9_name: "claim_turf",
				claim_10_desc: "claim_cover_operation_description",
				claim_10_name: "claim_cover_operation",
				claim_11_desc: "claim_protection_racket_description",
				claim_11_name: "claim_protection_racket",
				claim_12_desc: "claim_infirmary_description",
				claim_12_name: "claim_infirmary",
				claim_13_desc: "claim_envoy_description",
				claim_13_name: "claim_envoy",
				claim_14_desc: "claim_cover_identities_description",
				claim_14_name: "claim_cover_identities",
				claim_15_desc: "claim_city_records_description",
				claim_15_name: "claim_city_records",
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: "crew_marauders_description",
				crew_xp_condition: "crew_marauders_xp_condition",
				hunting_grounds_type: "crew_marauders_hunting_grounds_type",
				hunting_grounds_description: "crew_marauders_hunting_grounds_description",
				upgrade_21_check_1: "1"
			},
			crewability: ["killers", "armed_and_ready", "hostis_humani_generis", "black_sails", "loose_cannons", "fiends", "blood_brothers"],
			upgrade: [{
				name: 'crew_upgrade_bandoliers',
				numboxes: '1'
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
			base: {
				claim_1_desc: "claim_training_rooms_description",
				claim_1_name: "claim_training_rooms",
				claim_2_desc: "claim_vice_den_description",
				claim_2_name: "claim_vice_den",
				claim_3_desc: "claim_fixer_description",
				claim_3_name: "claim_fixer",
				claim_4_desc: "claim_informants_description",
				claim_4_name: "claim_informants",
				claim_5_desc: "claim_hagfish_farm_description",
				claim_5_name: "claim_hagfish_farm",
				claim_6_desc: "claim_victim_trophies_description",
				claim_6_name: "claim_victim_trophies",
				claim_7_name: "claim_turf",
				claim_9_name: "claim_turf",
				claim_10_desc: "claim_cover_operation_description",
				claim_10_name: "claim_cover_operation",
				claim_11_desc: "claim_protection_racket_description",
				claim_11_name: "claim_protection_racket",
				claim_12_desc: "claim_infirmary_description",
				claim_12_name: "claim_infirmary",
				claim_13_desc: "claim_envoy_description",
				claim_13_name: "claim_envoy",
				claim_14_desc: "claim_cover_identities_description",
				claim_14_name: "claim_cover_identities",
				claim_15_desc: "claim_city_records_description",
				claim_15_name: "claim_city_records",
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: "crew_phantoms_description",
				crew_xp_condition: "crew_phantoms_xp_condition",
				hunting_grounds_type: "crew_phantoms_hunting_grounds_type",
				hunting_grounds_description: "crew_phantoms_hunting_grounds_description",
				upgrade_22_check_1: "1",
				setting_show_purpose: "1"
			},
			crewability: ["accursed", "bound_in_darkness", "skeleton_crew", "derelict", "living_legends", "seven_seas", "sworn_to_service"],
			upgrade: [{
				name: 'crew_upgrade_pouches',
				numboxes: '1'
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
			base: {
				claim_1_desc: "claim_training_rooms_description",
				claim_1_name: "claim_training_rooms",
				claim_2_desc: "claim_vice_den_description",
				claim_2_name: "claim_vice_den",
				claim_3_desc: "claim_fixer_description",
				claim_3_name: "claim_fixer",
				claim_4_desc: "claim_informants_description",
				claim_4_name: "claim_informants",
				claim_5_desc: "claim_hagfish_farm_description",
				claim_5_name: "claim_hagfish_farm",
				claim_6_desc: "claim_victim_trophies_description",
				claim_6_name: "claim_victim_trophies",
				claim_7_name: "claim_turf",
				claim_9_name: "claim_turf",
				claim_10_desc: "claim_cover_operation_description",
				claim_10_name: "claim_cover_operation",
				claim_11_desc: "claim_protection_racket_description",
				claim_11_name: "claim_protection_racket",
				claim_12_desc: "claim_infirmary_description",
				claim_12_name: "claim_infirmary",
				claim_13_desc: "claim_envoy_description",
				claim_13_name: "claim_envoy",
				claim_14_desc: "claim_cover_identities_description",
				claim_14_name: "claim_cover_identities",
				claim_15_desc: "claim_city_records_description",
				claim_15_name: "claim_city_records",
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: "crew_renegades_description",
				crew_xp_condition: "crew_renegades_xp_condition",
				hunting_grounds_type: "crew_renegades_hunting_grounds_type",
				hunting_grounds_description: "crew_renegades_hunting_grounds_description",
				upgrade_23_check_1: "1"
			},
			crewability: ["scallywags", "devil's_own_luck", "scavengers", "silver_tongued", "synchronized", "low_profile", "all_hands"],
			upgrade: [{
				name: 'crew_upgrade_hidden_pockets',
				numboxes: '1'
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
			ability: ["iron_will", "self_control", "expertise", "sharpshooter", "tenacious", "master_and_commander", "ready_for_anything", "focused"],
			base: {
				command: "2",
				friends_title: "playbook_commander_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_commander_description",
				navigate: "1",
				xp_condition: "playbook_commander_xp_condition"
			},
			playbookitem: [{
				bold: "1",
				name: "playbook_item_fine_rifle",
				numboxes: "1"
			}, {
				bold: "1",
				name: "playbook_item_fine_pistol",
				numboxes: "1"
			}, {
				bold: "1",
				name: "playbook_item_fine_navigational_tools",
				numboxes: "1"
			}, {
				name: "playbook_item_documents",
				numboxes: "1"//,
				//short: "on"
			}, {
				name: "playbook_item_books",
				description: "a_pistol_description",
				numboxes: "2"//,
				//short: "on"
			}, {
				name: "playbook_item_personal_memento",
				numboxes: "0"
			}]
		},

		mariner: {
			ability: ["in_fine_condition", "saboteur", "to_the_brink", "side_jobs", "shipshape", "sawbones", "no_rest_for_the_weary", "sturdy"],
			base: {
				char_cohort_name: "trained_pet",
				char_cohort_subtype: "animal",
				friends_title: "playbook_mariner_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				navigate: "2",
				patch: "1",
				playbook_description: "playbook_mariner_description",
				xp_condition: "playbook_mariner_xp_condition"
			},
			playbookitem: [{
				bold: "1",
				name: "playbook_item_fine_carpenter's_tools",
				numboxes: "1"
			}, {
				bold: "1",
				name: "playbook_item_fine_bottle_of_rum",
				numboxes: "1"
			}, {
				bold: "1",
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
			ability: ["from_the_deep", "tempest", "whispers_in_the_wind", "witch_doctor", "familiar", "black_spot", "born_in_brine", "warded"],
			base: {
				attune: "0",
				char_cohort_name: "trained_pet",
				char_cohort_subtype: "animal",
				friends_title: "playbook_occultist_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_occultist_description",
				scan: "1",
				xp_condition: "playbook_occultist_xp_condition"
			},
			playbookitem: [{
				bold: "1",
				name: "playbook_item_fine_whalebone_knife",
				numboxes: "1"
			}, {
				bold: "1",
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
			ability: ["not_without_a_fight", "resilient", "tough_as_nails", "fearsome_reputation", "armed_to_the_teeth", "savage", "right_bastard", "battleborn"],
			base: {
				brawl: "2",
				command: "1",
				friends_title: "playbook_reaver_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_reaver_description",
				xp_condition: "playbook_reaver_xp_condition"
			},
			playbookitem: [{
				bold: "1",
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
			ability: ["daredevil", "cloak_&_dagger", "reflexes", "savvy", "jack_of_all_trades", "trust_in_me", "against_the_odds", "irrepressible"],
			base: {
				consort: "2",
				friends_title: "playbook_scoundrel_friends_title",
				gatherinfo1: "gatherinfo_what_do_they_intend",
				gatherinfo2: "gatherinfo_how_can_I_get_them",
				gatherinfo3: "gatherinfo_what_are_they_really",
				gatherinfo4: "gatherinfo_what_should_I_look",
				gatherinfo5: "gatherinfo_wheres_the_weakness",
				gatherinfo6: "gatherinfo_how_can_I_find",
				playbook_description: "playbook_scoundrel_description",
				vault: "1",
				xp_condition: "playbook_scoundrel_xp_condition"
			},
			playbookitem: [{
				bold: "1",
				name: "playbook_item_fine_blade",
				numboxes: "1"
			}, {
				bold: "1",
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
				name: "faction_the_unseen",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_the_hive",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_the_circle_of_flame",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_the_silver_nails",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_lord_scurlock",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_the_crows",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_the_lampblacks",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_the_red_sashes",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_the_dimmer_sisters",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_the_grinders",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_the_billhooks",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_the_wraiths",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_the_gray_cloaks",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_ulf_ironborn",
				tier: "I",
				hold: "S"
			},
			{
				name: "faction_the_foghounds",
				tier: "I",
				hold: "W"
			},
			{
				name: "faction_the_lost",
				tier: "I",
				hold: "W"
			}
		],
		factions2: [{
				name: "faction_imperial_military",
				tier: "VI",
				hold: "S"
			},
			{
				name: "faction_city_council",
				tier: "V",
				hold: "S"
			},
			{
				name: "faction_ministry_of_preservation",
				tier: "V",
				hold: "S"
			},
			{
				name: "faction_leviathan_hunters",
				tier: "V",
				hold: "S"
			},
			{
				name: "faction_ironhook_prison",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_sparkwrights",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_spirit_wardens",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_bluecoats",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_inspectors",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_iruvian_consulate",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_skovlan_consulate",
				tier: "III",
				hold: "W"
			},
			{
				name: "faction_the_brigade",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_severosi_consulate",
				tier: "I",
				hold: "S"
			},
			{
				name: "faction_dagger_isles_consulate",
				tier: "I",
				hold: "S"
			}
		],
		factions3: [{
				name: "faction_the_foundation",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_dockers",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_gondoliers",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_sailors",
				tier: "III",
				hold: "W"
			},
			{
				name: "faction_laborers",
				tier: "III",
				hold: "W"
			},
			{
				name: "faction_cabbies",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_cyphers",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_ink_rakes",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_rail_jacks",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_servants",
				tier: "II",
				hold: "W"
			}
		],
		factions4: [{
				name: "faction_the_church_of_ecstasy",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_the_horde",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_the_path_of_echoes",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_the_forgotten_gods",
				tier: "III",
				hold: "W"
			},
			{
				name: "faction_the_reconciled",
				tier: "III",
				hold: "S"
			},
			{
				name: "faction_skovlander_refugees",
				tier: "III",
				hold: "W"
			},
			{
				name: "faction_the_weeping_lady",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_deathlands_scavengers",
				tier: "II",
				hold: "W"
			}
		],
		factions5: [{
				name: "faction_whitecrown",
				tier: "V",
				hold: "S"
			},
			{
				name: "faction_brightstone",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_charterhall",
				tier: "IV",
				hold: "S"
			},
			{
				name: "faction_six_towers",
				tier: "III",
				hold: "W"
			},
			{
				name: "faction_silkshore",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_nightmarket",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_crow's_foot",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_the_docks",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_barrowcleft",
				tier: "II",
				hold: "S"
			},
			{
				name: "faction_coalridge",
				tier: "II",
				hold: "W"
			},
			{
				name: "faction_charhollow",
				tier: "I",
				hold: "S"
			},
			{
				name: "faction_dunslough",
				tier: "I",
				hold: "W"
			}
		]
	},
	actionData = {
		insight: [
			"finesse",
			"navigate",
			"patch",
			"scan"
		],
		prowess: [
			"blast",
			"brawl",
			"skulk",
			"vault"
		],
		resolve: [
			"attune",
			"command",
			"consort",
			"sway"
		]
	},
	traumaData = {
		normal: ['cold', 'haunted', 'obsessed', 'paranoid', 'reckless', 'soft', 'unstable', 'vicious'],
		ghost: ['chaotic', 'destructive', 'furious', 'obsessive', 'territorial', 'savage'],
		hull: ['clanking', 'leaking', 'fixated', 'smoking', 'sparking', 'unstable']
	},
	itemData = [{
			name: "a_blade_or_two",
			description: "a_blade_or_two_description",
			numboxes: "1"
		},
		{
			name: 'a_firearm',
			description: 'a_firearm_description',
			numboxes: '1'
		},
		{
			name: "throwing_knives",
			description: "throwing_knives_description",
			numboxes: "1"
		},
		{
			name: "a_pistol",
			description: "a_pistol_description",
			numboxes: "1",
			short: "1"
		},
		{
			name: "a_2nd_pistol",
			description: "a_pistol_description",
			numboxes: "1",
			short: "1"
		},
		{
			name: "a_large_weapon",
			description: "a_large_weapon_description",
			numboxes: "2"
		},
		{
			name: "an_unusual_weapon",
			description: "an_unusual_weapon_description",
			numboxes: "1"
		},
		{
			name: "armor",
			description: "armor_description",
			numboxes: "2",
			short: "1"
		},
		{
			name: "+heavy",
			description: "+heavy_description",
			numboxes: "3",
			short: "1"
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
		},
		{
			name: "burglary_gear",
			description: "burglary_gear_description",
			numboxes: "1"
		},
		{
			name: "climbing_gear",
			description: "climbing_gear_description",
			numboxes: "2"
		},
		{
			name: "arcane_implements",
			description: "arcane_implements_description",
			numboxes: "1"
		},
		{
			name: "documents",
			description: "documents_description",
			numboxes: "1"
		},
		{
			name: "subterfuge_supplies",
			description: "subterfuge_supplies_description",
			numboxes: "1"
		},
		{
			name: "demolition_tools",
			description: "demolition_tools_description",
			numboxes: "2"
		},
		{
			name: "tinkering_tools",
			description: "tinkering_tools_description",
			numboxes: "1"
		},
		{
			name: "lantern",
			description: "lantern_description",
			numboxes: "1"
		}
	],
	translatedDefaults = {
		cohort1_name: "cohort",
		contacts_title: "contacts",
		factions_title: "factions_title",
		factions1_header: "factions1",
		factions2_header: "factions2",
		factions3_header: "factions3",
		factions4_header: "factions4",
		factions5_header: "factions5",
		frame: "frame",
		friends_title: "friends",
		setting_deity_label: "deity",
		setting_heat_label: "heat",
		setting_stress_label: "stress",
		setting_trauma_label: "trauma",
		setting_wanted_label: "wanted",
		upgrade_6_name: "coffers",
		upgrade_6_description: "upgrade_coffers_description",
		upgrade_7_name: "cannons",
		upgrade_7_description: "upgrade_cannons_description",
		upgrade_8_name: "boltholes",
		upgrade_8_description: "upgrade_boltholes_description",
		upgrade_9_name: "hull",
		upgrade_9_description: "upgrade_hull_description",
		upgrade_10_name: "hidden_cannons",
		upgrade_10_description: "upgrade_hidden_cannons_description",
		upgrade_11_name: "sails",
		upgrade_11_description: "upgrade_sails_description",
		upgrade_12_name: "overgunned",
		upgrade_12_description: "upgrade_overgunned_description",
		upgrade_13_name: "rudder",
		upgrade_13_description: "upgrade_rudder_description",
		upgrade_14_name: "prow_ram",
		upgrade_14_description: "upgrade_prow_ram_description",
		upgrade_15_name: "charts",
		upgrade_15_description: "upgrade_charts_description",
		upgrade_16_name: "specialty_shot",
		upgrade_16_description: "upgrade_specialty_shot_description",
		upgrade_17_name: "tools",
		upgrade_17_description: "upgrade_tools_description",
		upgrade_18_name: "retractable_keel",
		upgrade_18_description: "upgrade_retractable_keel_description",
		upgrade_19_name: "weapons",
		upgrade_19_description: "upgrade_weapons_description",
		upgrade_20_name: "insight",
		upgrade_20_description: "upgrade_insight_description",
		upgrade_21_name: "prowess",
		upgrade_21_description: "upgrade_prowess_description",
		upgrade_22_name: "resolve",
		upgrade_22_description: "upgrade_resolve_description",
		upgrade_23_name: "personal",
		upgrade_23_description: "upgrade_personal_description",
		upgrade_24_name: "mastery",
		upgrade_24_description: "upgrade_mastery_description",
		xp_condition2: "xp_beliefs",
		xp_condition3: "xp_vice"
	},
	defaultValues = {
		attune: "0",
		blast: "0",
		brawl: "0",
		claim_bridge_10_15: "1",
		claim_bridge_12_13: "1",
		claim_bridge_13_14: "1",
		claim_bridge_2_3: "1",
		claim_bridge_2_7: "1",
		claim_bridge_3_4: "1",
		claim_bridge_4_9: "1",
		claim_bridge_6_11: "1",
		claim_bridge_6_7: "1",
		claim_bridge_9_14: "1",
		cohort1_subtype: "",
		cohort1_type: "gang",
		command: "0",
		consort: "0",
		finesse: "0",
		//hunt: "0",
		navigate: "0",
		patch: "0",
		//prowl: "0",
		scan: "0",
		setting_extra_stress: "0",
		setting_load_h: "6",
		setting_show_deity: "0",
		setting_show_frame: "0",
		setting_show_origin: "0",
		setting_show_purpose: "0",
		setting_show_strictures: "0",
		setting_traumata_set: "normal",
		setting_vampirexp: "0",
		setting_vice_type: "normal",
		//skirmish: "0",
		skulk: "0",
		//study: "0",
		//survey: "0",
		sway: "0",
		//tinker: "0",
		trauma: "0",
		upgrade_10_check_1: "0",
		upgrade_14_check_1: "0",
		upgrade_20_check_1: "0",
		upgrade_21_check_1: "0",
		upgrade_22_check_1: "0",
		upgrade_6_check_1: "0",
		vault: "0",
		//wreck: "0"
	},
	alchemicalData = [
		"alcahest",
		"binding_oil",
		"drift_oil",
		"drown_powder",
		"eyeblind_poison",
		"fire_oil",
		"grenade",
		"quicksilver",
		"skullfire_poison",
		"smoke_bomb",
		"spark_drug",
		"standstill_poison",
		"trance_powder",
	];
/* Transform data once translations are known */
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
	crewData[crew].contact = [...Array(6).keys()].map(i => ({
		name: getTranslationByKey(`crew_${crew}_contact_${i}`)
	}));
	crewData[crew].crewability = crewData[crew].crewability.map(name => ({
		name: getTranslationByKey(`crew_ability_${name}`),
		description: getTranslationByKey(`crew_ability_${name}_description`)
	}));
	crewData[crew].upgrade.forEach(upgrade => {
		upgrade.name = getTranslationByKey(upgrade.name);
		upgrade.boxes_chosen = '1';
	});
});
itemData.forEach(item => {
	item.boxes_chosen = '1';
	item.name = getTranslationByKey(item.name);
	item.description = getTranslationByKey(item.description);
});
Object.keys(translatedDefaults).forEach(k => {
	translatedDefaults[k] = getTranslationByKey(translatedDefaults[k]);
});
Object.assign(defaultValues, translatedDefaults);
Object.keys(factionsData).forEach(x => {
	factionsData[x].forEach(faction => {
		faction.name = getTranslationByKey(faction.name);
	});
});
alchemicalData.forEach((v, k) => {
	alchemicalData[k] = {
		name: getTranslationByKey(v)
	};
});
Object.keys(playbookData).forEach(playbook => {
	const base = playbookData[playbook].base,
		translatedBaseAttributes = [
			'char_cohort_name',
			'char_cohort_subtype',
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
	if (!['ghost', 'hull'].includes(playbook)) {
		playbookData[playbook].friend = [...Array(5).keys()]
			.map(i => ({
				name: getTranslationByKey(`playbook_${playbook}_friend_${i}`)
			}))
			.filter(o => o.name);
	}
	else playbookData[playbook].friend = [];
	playbookData[playbook].ability = playbookData[playbook].ability.map(name => ({
		name: getTranslationByKey(`playbook_ability_${name}`),
		description: getTranslationByKey(`playbook_ability_${name}_description`)
	}));
	playbookData[playbook].playbookitem.forEach(item => {
		item.name = getTranslationByKey(item.name);
		item.boxes_chosen = '1';
	});
});
/* FUNCTIONS */
const mySetAttrs = (attrs, options, callback) => {
		const finalAttrs = Object.keys(attrs).reduce((m, k) => {
			m[k] = String(attrs[k]);
			return m;
		}, {});
		setAttrs(finalAttrs, options, callback);
	},
	setAttr = (name, value) => {
		getAttrs([name], v => {
			const setting = {};
			if (v[name] !== String(value)) setting[name] = String(value);
			setAttrs(setting);
		});
	},
	fillRepeatingSectionFromData = (sectionName, dataList, autogen, callback) => {
		callback = callback || (() => {});
		getSectionIDs(`repeating_${sectionName}`, idList => {
			const existingRowAttributes = [
				...idList.map(id => `repeating_${sectionName}_${id}_name`),
				...idList.map(id => `repeating_${sectionName}_${id}_autogen`)
			];
			getAttrs(existingRowAttributes, v => {
				/* Delete auto-generated rows */
				if (autogen) {
					idList = idList.filter(id => {
						if (v[`repeating_${sectionName}_${id}_autogen`]) {
							removeRepeatingRow(`repeating_${sectionName}_${id}`);
							return false;
						}
						else return true;
					});
				}
				const existingRowNames = idList.map(id => v[`repeating_${sectionName}_${id}_name`]),
					createdIDs = [],
					setting = dataList.filter(o => !existingRowNames.includes(o.name))
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
						if (autogen) {
							newAttrs[`repeating_${sectionName}_${rowID}_autogen`] = '1';
						}
						return Object.keys(o).reduce((m, key) => {
							m[`repeating_${sectionName}_${rowID}_${key}`] = o[key];
							return m;
						}, newAttrs);
					})
					.reduce((m, o) => Object.assign(m, o), {});
				mySetAttrs(setting, {}, callback);
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
	handleBoxesFill = (name, upToFour) => {
		on(`change:${name}1 change:${name}2 change:${name}3 change:${name}4`, event => {
			if (event.sourceType !== 'player') return;
			getAttrs([event.sourceAttribute], v => {
				const rName = event.sourceAttribute.slice(0, -1),
					setting = {};
				if (String(v[event.sourceAttribute]) === '1') {
					switch (event.sourceAttribute.slice(-1)) {
					case '4':
						setting[`${rName}3`] = 1;
					case '3':
						setting[`${rName}2`] = 1;
					case '2':
						setting[`${rName}1`] = 1;
					}
				}
				if (String(v[event.sourceAttribute]) === '0') {
					switch (event.sourceAttribute.slice(-1)) {
					case '1':
						setting[`${rName}2`] = 0;
					case '2':
						setting[`${rName}3`] = 0;
					case '3':
						if (upToFour) setting[`${rName}4`] = 0;
					}
				}
				mySetAttrs(setting);
			});
		});
	},
	calculateResistance = name => {
		getAttrs(actionData[name], v => {
			const total = Object.keys(v).map(x => v[x])
				.reduce((s, c) => s + (String(c) === '0' ? 0 : 1), 0);
			setAttr(name, total);
		});
	},
	calculateVice = () => {
		getAttrs(Object.keys(actionData), v => {
			setAttr('vice', Math.min(...Object.keys(v).map(x => parseInt(v[x]) || 0)));
		});
	},
	calculateStashDice = stash => setAttr('stash_dice', Math.floor(parseInt(stash) / 10)),
	calculateCohortDice = prefix => {
		getAttrs(['crew_tier', `${prefix}_impaired`, `${prefix}_type`], v => {
			const dice = (parseInt(v.crew_tier) || 0) - (parseInt(v[`${prefix}_impaired`]) || 0) +
				((v[`${prefix}_type`] === 'elite' || v[`${prefix}_type`] === 'expert') ? 1 : 0);
			setAttr(`${prefix}_dice`, dice);
		});
	};
/* CONSTANTS */
const crewAttributes = [...new Set([].concat(...Object.keys(crewData).map(x => Object.keys(crewData[x].base))))],
	playbookAttributes = [...new Set([].concat(...Object.keys(playbookData).map(x => Object.keys(playbookData[x].base))))],
	watchedAttributes = new Set(crewAttributes.concat(playbookAttributes)),
	actionsFlat = [].concat(...Object.keys(actionData).map(x => actionData[x])),
	traumaDataFlat = Object.keys(traumaData).reduce((m, k) => m.concat(traumaData[k]), []),
	autoExpandFields = [
		'repeating_ability:name',
		'repeating_ability:description',
		'repeating_crewability:name',
		'repeating_crewability:description',
		'repeating_playbookitem:name',
		'repeating_upgrade:name',
		'repeating_friend:name',
		'repeating_contact:name',
		'repeating_clock:name',
		'repeating_crewclock:name',
		'repeating_factionclock:name',
		'repeating_cohort:edges',
		'repeating_cohort:flaws',
		'repeating_alchemical:name',
		'xp_condition',
		'xp_condition_extra',
		'xp_condition2',
		'xp_condition3',
		'crew_xp_condition',
		'hunting_grounds_description',
		'cohort1_edges',
		'cohort1_flaws',
	],
	autogenSections = [
		'ability',
		'crewability',
		'friend',
		'contact',
		'playbookitem',
		'upgrade'
	],
	spiritPlaybooks = ['ghost', 'hull', 'vampire'];
/* EVENT HANDLERS */
/* Set default fields when setting crew type or playbook */
on('change:crew_type change:playbook', event => {
	getAttrs(['playbook', 'crew_type', 'changed_attributes', 'setting_autofill', ...watchedAttributes], v => {
		const changedAttributes = (v.changed_attributes || '').split(','),
			sourceName = (event.sourceAttribute === 'crew_type' ? v.crew_type : v.playbook).toLowerCase(),
			fillBaseData = (data, defaultAttrNames) => {
				if (data) {
					const finalSettings = defaultAttrNames.filter(name => !changedAttributes.includes(name))
						// do not reset attributes which have been changed by the user
						.filter(name => !spiritPlaybooks.includes(sourceName) || !actionsFlat.includes(name))
						// do not reset action dots if changing to a spirit playbook
						.filter(name => v[name] !== (defaultValues[name] || ''))
						// do not set attributes if current value is equal to sheet defaults
						.reduce((m, name) => {
							m[name] = defaultValues[name] || '';
							return m;
						}, {});
					Object.keys(data).filter(name => !changedAttributes.includes(name))
						.forEach(name => (finalSettings[name] = data[name]));
					mySetAttrs(finalSettings);
				}
			};
		if (sourceName) {
			setAttr('show_playbook_reminder', '0');
		}
		if (v.setting_autofill !== '1') return;
		if (event.sourceAttribute === 'crew_type' && sourceName in crewData) {
			fillRepeatingSectionFromData('contact', crewData[sourceName].contact, true);
			fillRepeatingSectionFromData('crewability', crewData[sourceName].crewability, true);
			fillRepeatingSectionFromData('upgrade', crewData[sourceName].upgrade, true);
			fillBaseData(crewData[sourceName].base, crewAttributes);
		}
		if (event.sourceAttribute === 'playbook' && sourceName in playbookData) {
			fillRepeatingSectionFromData('friend', playbookData[sourceName].friend, true);
			fillRepeatingSectionFromData('ability', playbookData[sourceName].ability, true);
			fillRepeatingSectionFromData('playbookitem', playbookData[sourceName].playbookitem, true);
			fillBaseData(playbookData[sourceName].base, playbookAttributes);
			if (sourceName === 'leech') fillRepeatingSectionFromData('alchemical', alchemicalData);
		}
	});
});
/* Watch repeating rows for changes and set autogen to false if change happens*/
autogenSections.forEach(sectionName => {
	on(`change:repeating_${sectionName}`, event => {
		getAttrs([`repeating_${sectionName}_autogen`], v => {
			if (v[`repeating_${sectionName}_autogen`] && event.sourceType === 'player') {
				setAttr(`repeating_${sectionName}_autogen`, '');
			}
		});
	});
});
/* Watch for changes in auto-set attributes and update changed_attributes*/
watchedAttributes.forEach(name => {
	on(`change:${name}`, event => {
		if (event.sourceType === 'player') {
			getAttrs(['changed_attributes'], v => {
				const changedAttributes = [...new Set(v.changed_attributes.split(',')).add(name)]
					.filter(x => !!x).join(',');
				setAttr('changed_attributes', changedAttributes);
			});
		}
	});
});
/* Register attribute/action event handlers */
Object.keys(actionData).forEach(attrName => {
	on(actionData[attrName].map(x => `change:${x}`).join(' '), () => calculateResistance(attrName));
	on(`change:setting_dark_talent_${attrName}`, () => {
		getAttrs([`setting_dark_talent_${attrName}`, `setting_resbonus_${attrName}`], v => {
			const resistanceBonus = (parseInt(v[`setting_resbonus_${attrName}`]) || 0) +
				((String(v[`setting_dark_talent_${attrName}`]) === '1') ? 1 : -1);
			setAttr(`setting_resbonus_${attrName}`, resistanceBonus);
		});
	});
	on(`change:${attrName}`, calculateVice);
});
/* Calculate stash */
on('change:stash', event => calculateStashDice(event.newValue));
/* Calculate trauma */
on('change:setting_traumata_set ' + traumaDataFlat.map(x => `change:trauma_${x}`).join(' '), event => {
	getAttrs(['setting_traumata_set', ...traumaDataFlat.map(x => `trauma_${x}`)], v => {
		const traumaType = (v.setting_traumata_set === '0' ? 'normal' : v.setting_traumata_set);
		if (traumaData[traumaType] && event.sourceType === 'player') {
			const newTrauma = traumaData[traumaType].reduce((m, name) => m + (parseInt(v[`trauma_${name}`]) || 0), 0)
			setAttr('trauma', newTrauma);
		}
	});
});
/* Generate buttons */
on('change:generate_factions', () => {
	setAttr('show_faction_generatebutton', '0');
	Object.keys(factionsData).forEach(sectionName => {
		fillRepeatingSectionFromData(sectionName, factionsData[sectionName]);
	});
});
autogenSections.forEach(sectionName => {
	on(`change:generate_${sectionName}`, () => {
		getAttrs(['generate_source_character', 'generate_source_crew', 'sheet_type'], v => {
			const data = (v.sheet_type === 'character') ? playbookData : crewData,
				genSource = v[`generate_source_${v.sheet_type}`];
			if (genSource in data) {
				emptyFirstRowIfUnnamed(sectionName);
				fillRepeatingSectionFromData(sectionName, data[genSource][sectionName]);
			}
		});
	});
});
/* Extra stress and trauma */
on('change:setting_extra_stress', event => setAttr('stress_max', 9 + (parseInt(event.newValue) || 0)));
on('change:setting_extra_trauma', event => setAttr('trauma_max', 4 + (parseInt(event.newValue) || 0)));
/* Calculate cohort quality */
on(['crew_tier', 'cohort1_impaired', 'cohort1_type'].map(x => `change:${x}`).join(' '), () => calculateCohortDice('cohort1'));
on('change:repeating_cohort', () => calculateCohortDice('repeating_cohort'));
on('change:crew_tier', () => {
	getSectionIDs('repeating_cohort', a => a.forEach(id => calculateCohortDice(`repeating_cohort_${id}`)));
});
on('change:char_cohort_quality change:char_cohort_impaired', () => {
	getAttrs(['char_cohort_quality', 'char_cohort_impaired'], v => {
		const dice = (parseInt(v.char_cohort_quality) || 0) - (parseInt(v.char_cohort_impaired) || 0);
		setAttr('char_cohort_dice', dice);
	});
});
/* Set correct verb for cohort roll button */
['char_cohort', 'cohort1', 'repeating_cohort'].forEach(prefix => {
	const eventString = 'change:' + ((prefix === 'repeating_cohort') ? `${prefix}:type` : `${prefix}_type`);
	on(eventString, event => {
		const verb = (event.newValue === 'expert') ? '^{rolls_their}' : '^{roll_their-l}';
		setAttr(`${prefix}_verb`, verb);
	});
});
/* Left-fill checkboxes */
handleBoxesFill('upgrade_24_check_', true);
handleBoxesFill('bandolier1_check_');
handleBoxesFill('bandolier2_check_');
['item', 'playbookitem', 'upgrade'].forEach(sName => handleBoxesFill(`repeating_${sName}:check_`));
/* Pseudo-radios */
['crew_tier', ...actionsFlat].forEach(name => {
	on(`change:${name}`, event => {
		if (String(event.newValue) === '0' && event.sourceType === 'player') {
			setAttr(name, (parseInt(event.previousValue) || 1) - 1);
		}
	});
});
/* Item reset button */
on('change:reset_items', () => {
	const clearChecks = sectionName => {
		getSectionIDs(`repeating_${sectionName}`, idArray => {
			const setting = [
				...idArray.map(id => `repeating_${sectionName}_${id}_check_1`),
				...idArray.map(id => `repeating_${sectionName}_${id}_check_2`),
				...idArray.map(id => `repeating_${sectionName}_${id}_check_3`)
			].reduce((m, name) => {
				m[name] = 0;
				return m;
			}, {});
			mySetAttrs(setting);
		});
	};
	setAttr('load', 0);
	['item', 'playbookitem'].forEach(clearChecks);
});
/* Default values for number of upgrades boxes */
on('change:repeating_upgrade:boxes_chosen', () => {
	getAttrs(['repeating_upgrade_numboxes'], v => {
		if (!['1', '2', '3'].includes(v.repeating_upgrade_numboxes)) {
			setAttr('repeating_upgrade_numboxes', '1');
		}
	});
});
/* Bonus dice via dropdown or text input */
on('change:setting_text_bonus_query sheet:opened', () => {
	getAttrs(['setting_text_bonus_query', 'bonusdice', 'numberofdice'], v => {
		const setting = {};
		if (String(v.setting_text_bonus_query) === '1') {
			setting.bonusdice = `(?{${getTranslationByKey('bonusdice')}|0})`;
			setting.numberofdice = `(?{${getTranslationByKey('numberofdice')}|0})`;
		}
		else {
			setting.bonusdice = `?{${getTranslationByKey('bonusdice')}|0|1|2|3|4|5|6|-1|-2|-3}`;
			setting.numberofdice = `?{${getTranslationByKey('numberofdice')}|0|1|2|3|4|5|6}`;
			if (setting.bonusdice === v.bonusdice) delete setting.bonusdice;
			if (setting.numberofdice === v.numberofdice) delete setting.numberofdice;
		}
		mySetAttrs(setting);
	});
});
/* Resistance query */
on('change:setting_consequence_query sheet:opened', () => {
	getAttrs(['setting_consequence_query'], v => {
		const consequenceQuery = (String(v.setting_consequence_query) === '1') ?
			`?{${getTranslationByKey('consequence')}|${getTranslationByKey('a_consequence')}}` :
			getTranslationByKey('a_consequence');
		setAttr('consequence_query', consequenceQuery);
	});
});
/* Trim whitespace in auto-expand fields */
autoExpandFields.forEach(name => {
	on(`change:${name}`, event => {
		const attrName = name.replace(':', '_');
		getAttrs([attrName], v => {
			if (v[attrName].trim() !== v[attrName] && event.sourceType === 'player') {
				setAttr(attrName, v[attrName].trim());
			}
		});
	});
});
/* INITIALISATION AND UPGRADES */
on('sheet:opened', () => {
	getAttrs(['sheet_type', 'changed_attributes', 'crew_type', 'playbook'], v => {
		/* Make sure sheet_type is never 0 */
		if (!['crew', 'faction'].includes(v.sheet_type)) setAttr('sheet_type', 'character');
		/* Remove reminder box if we have playbook or crew name */
		if (v.playbook || v.crew_type) setAttr('show_playbook_reminder', '0');
	});
	/* Set up translated queries */
	const queries = {
		effect_query: getTranslationByKey('effect_query'),
		notes_query: `?{${getTranslationByKey('notes')}}`,
		position_query: `?{${getTranslationByKey('position')}|` +
			`${getTranslationByKey('risky')},position=${getTranslationByKey('risky')}|` +
			`${getTranslationByKey('controlled')},position=${getTranslationByKey('controlled')}|` +
			`${getTranslationByKey('desperate')},position=${getTranslationByKey('desperate')}|` +
			`${getTranslationByKey('fortune_roll')},position=}`
	};
	getAttrs(Object.keys(queries), v => {
		const setting = {};
		Object.keys(queries).forEach(name => {
			if (v[name] !== queries[name]) setting[name] = queries[name];
		});
		mySetAttrs(setting);
	});
	/* Setup and upgrades */
	getAttrs(['version'], v => {
		const upgradeSheet = version => {
				const versionMajor = version && parseInt(version.split('.')[0]),
					versionMinor = version && parseInt(version.split('.')[1]);
				console.log(`Found version ${version}.`);
				if (version !== sheetVersion) console.log('Performing sheet upgrade.');
				// Upgrade to 0.7: Convert legacy faction repeating section to text
				if (versionMajor === 0 && versionMinor < 7) {
					getSectionIDs('repeating_faction', list => {
						const sectionList = ['faction1', 'faction2'].concat(list.map(str => `repeating_faction_${str}`)),
							attrList = [].concat(...sectionList.map(str => [`${str}_name`, `${str}_status`, `${str}_description`]));
						getAttrs(attrList, v => {
							const output = sectionList.map(str => {
								return 'Name: ' + v[`${str}_name`] + '\n' +
									'Status: ' + (v[`${str}_status`] || '') + '\n' +
									'Notes: ' + (v[`${str}_description`] || '') + '\n';
							}).join('\n');
							setAttr('faction_notes', output);
							list.forEach(id => removeRepeatingRow(`repeating_faction_${id}`));
							upgradeSheet('0.7');
						});
					});
				}
				// Upgrade to 0.9: Convert ability/friend/crewability/contact first row
				else if (versionMajor === 0 && versionMinor < 9) {
					const upgradeFunction = _.after(4, () => upgradeSheet('1.0')),
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
					});
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
							mySetAttrs(setting, {}, upgradeFunction);
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
							...Object.keys(translatedDefaults)
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
								mySetAttrs(setting, {}, upgradeFunction);
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
						Object.keys(translatedDefaults).forEach(k => {
							setting[k] = v[k] || setting[k] || translatedDefaults[k];
						});
						mySetAttrs(setting, {}, upgradeFunction);
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
							setting[name] = v[name] || translatedDefaults[name];
						});
						setting.bandolier1_check_1 = v.bandolier1_check || '0';
						setting.bandolier1_check_2 = v.bandolier1_check_b || '0';
						setting.bandolier1_check_3 = v.bandolier1_check_c || '0';
						setting.bandolier2_check_1 = v.bandolier2_check || '0';
						setting.bandolier2_check_2 = v.bandolier2_check_b || '0';
						setting.bandolier2_check_3 = v.bandolier2_check_c || '0';
						mySetAttrs(setting, {}, upgradeFunction);
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
							mySetAttrs(setting, {}, upgradeFunction);
						});
					});
				}
				// Upgrade to 1.10: Convert clocks
				else if (versionMajor === 1 && versionMinor < 10) {
					const upgradeFunction = _.after(2, () => upgradeSheet('1.10'));
					['clock', 'crewclock'].forEach(sName => {
						getSectionIDs(`repeating_${sName}`, idArray => {
							const oldAttrs = [
								...idArray.map(id => `repeating_${sName}_${id}_size`),
								...idArray.map(id => `repeating_${sName}_${id}_clock1`),
								...idArray.map(id => `repeating_${sName}_${id}_clock2`),
								...idArray.map(id => `repeating_${sName}_${id}_clock3`),
								...idArray.map(id => `repeating_${sName}_${id}_clock4`)
							];
							getAttrs(oldAttrs, v => {
								const setting = {};
								idArray.forEach(id => {
									switch (v[`repeating_${sName}_${id}_size`]) {
									case '6':
										setting[`repeating_${sName}_${id}_progress`] = v[`repeating_${sName}_${id}_clock2`] || '0';
										break;
									case '8':
										setting[`repeating_${sName}_${id}_progress`] = v[`repeating_${sName}_${id}_clock3`] || '0';
										break;
									case '12':
										setting[`repeating_${sName}_${id}_progress`] = v[`repeating_${sName}_${id}_clock4`] || '0';
										break;
									default:
									case 'none':
									case '4':
										setting[`repeating_${sName}_${id}_size`] = '4';
										setting[`repeating_${sName}_${id}_progress`] = v[`repeating_${sName}_${id}_clock1`] || '0';
										break;
									}
								});
								mySetAttrs(setting, {}, upgradeFunction);
							});
						});
					});
				}
				// Upgrade to 1.11: Convert all checkboxes to value=1
				else if (versionMajor === 1 && versionMinor < 11) {
					const upgradeFunction = _.after(14, () => upgradeSheet('1.11')),
						upgradeNums = [...Array(25).keys()].slice(1).filter(x => x !== 19).slice(5),
						boxes = ['show_settings', 'setting_extra_trauma', 'setting_extra_xp', 'setting_vampirexp', 'setting_show_strictures',
							'setting_show_frame', 'setting_show_itemdesc', 'setting_show_deity', 'setting_show_origin', 'setting_flexwidth',
							'cold', 'haunted', 'obsessed', 'paranoid', 'reckless', 'soft', 'unstable', 'vicious',
							'chaotic', 'destructive', 'furious', 'obsessive', 'territorial', 'savage',
							'clanking', 'leaking', 'fixated', 'smoking', 'sparking', 'unstable',
							'armor', 'armor_heavy', 'armor_special',
							'stricture_slumber', 'stricture_forbidden', 'stricture_repelled', 'stricture_bestial', 'stricture_bound',
							'show_alchemicals', 'bandolier1_check_1', 'bandolier1_check_2', 'bandolier1_check_3', 'bandolier2_check_1',
							'bandolier2_check_2', 'bandolier2_check_3', 'upgrade_24_check_3', 'upgrade_24_check_4',
							'cohort1_weak', 'cohort1_impaired', 'cohort1_broken', 'cohort1_armor',
							...[...Array(6).keys()].slice(1).map(x => `frame_feature_${x}_check`),
							...[...Array(6).keys()].slice(1).map(x => `setting_extra_stress${x}`),
							...[...Array(16).keys()].map(x => `claim_${x}_check`),
							...['1_2', '2_3', '3_4', '4_5', '1_6', '2_7', '3_8', '4_9', '5_10', '6_7', '7_8', '8_9', '9_10', '6_11',
								'7_12', '8_13', '9_14', '10_15', '11_12', '12_13', '13_14', '14_15'
							].map(x => `claim_bridge_${x}`),
							...upgradeNums.map(x => `upgrade_${x}_check_1`),
							...upgradeNums.map(x => `upgrade_${x}_check_2`),
							...upgradeNums.map(x => `upgrade_${x}_expand`)
						],
						repeatingBoxes = {
							ability: ['check'],
							claim: [...[...Array(6).keys()].slice(1).map(x => `claim_bridge_top_${x}`),
								...[...Array(6).keys()].slice(1).map(x => `claim_${x}_check`)
							],
							cohort: ['weak', 'impaired', 'broken', 'armor'],
							contact: ['check'],
							crewability: ['check'],
							factions1: ['expand'],
							factions2: ['expand'],
							factions3: ['expand'],
							factions4: ['expand'],
							factions5: ['expand'],
							item: ['boxes_chosen', 'check_1', 'check_2', 'check_3', 'expand', 'short'],
							playbookitem: ['bold', 'boxes_chosen', 'check_1', 'check_2', 'check_3', 'expand'],
							upgrade: ['boxes_chosen', 'check_1', 'check_2', 'check_3', 'expand', 'tall']
						},
						convertBoxes = attrNames => {
							getAttrs(attrNames, v => {
								const setting = {};
								attrNames.forEach(name => {
									if (v[name] === 'on') setting[name] = 1;
								});
								mySetAttrs(setting, {
									silent: true
								}, upgradeFunction);
							});
						};
					convertBoxes(boxes);
					Object.entries(repeatingBoxes).forEach(([sName, attrs]) => {
						getSectionIDs(`repeating_${sName}`, idArray => {
							const attrNames = idArray.reduce((m, id) => {
								return m.concat(attrs.map(name => `repeating_${sName}_${id}_${name}`));
							}, []);
							convertBoxes(attrNames);
						});
					});
				}
				// Upgrade to 1.12: Update dice totals
				else if (versionMajor === 1 && versionMinor < 12) {
					getAttrs(['stash'], v => calculateStashDice(v.stash));
					actionsFlat.forEach(name => {
						getAttrs([1, 2, 3, 4, 5].map(x => `${name}${x}`), v => {
							const total = [1, 2, 3, 4, 5].reduce((m, x) => m + (parseInt(v[`${name}${x}`]) || 0), 0);
							setAttr(name, total);
						});
					});
					getSectionIDs('repeating_cohort', idArray => {
						getAttrs(['crew_tier1', 'crew_tier2', 'crew_tier3', 'crew_tier4'], v => {
							const tier = (parseInt(v.crew_tier1) || 0) + (parseInt(v.crew_tier2) || 0) +
								(parseInt(v.crew_tier3) || 0) + (parseInt(v.crew_tier4) || 0);
							mySetAttrs({
								crew_tier: tier
							}, {}, () => {
								calculateCohortDice('cohort1');
								idArray.forEach(id => calculateCohortDice(`repeating_cohort_${id}`));
								upgradeSheet('1.12');
							});
						});
					});
				}
				// Upgrade to 2.0: Rename trauma attributes, frame feature migration
				else if (versionMajor < 2) {
					const attrs = [
						...traumaDataFlat,
						'changed_attributes',
						...[1, 2, 3, 4, 5].map(x => `frame_feature_${x}_check`),
						...[1, 2, 3, 4, 5].map(x => `frame_feature_${x}_desc`)
					];
					getAttrs(attrs, v => {
						const upgradeFunction = _.after(2, () => upgradeSheet('2.0')),
							frameData = [1, 2, 3, 4, 5].map(k => ({
								check: v[`frame_feature_${k}_check`] || '',
								name: v[`frame_feature_${k}_desc`] || ''
							})).filter(o => o.check || o.name),
							changedAttrs = new Set(v.changed_attributes.split(',')),
							setting = traumaDataFlat.reduce((m, name) => {
								if (String(v[name]) === '1') m[`trauma_${name}`] = '1';
								return m;
							}, {});
						actionsFlat.filter(n => changedAttrs.has(`${n}1`) || changedAttrs.has(`${n}2`))
							.forEach(name => changedAttrs.add(name));
						setting.changed_attributes = [...changedAttrs].join(',');
						fillRepeatingSectionFromData('framefeature', frameData, false, upgradeFunction);
						mySetAttrs(setting, {}, upgradeFunction);
					});
				}
				// Upgrade to 2.2: Enable pet for hounds
				else if (versionMajor === 2 && versionMinor < 2) {
					getAttrs(['playbook'], v => {
						if (v.playbook.toLowerCase() === 'hound') {
							mySetAttrs({
								char_cohort_name: 'Hunting Pet',
								char_cohort_subtype: 'Hunter',
								setting_show_cohort: '1'
							});
						}
						upgradeSheet('2.2');
					});
				}
				// Upgrade to 2.4: Generate alchemicals for Leeches, recalculate resistance
				else if (versionMajor === 2 && versionMinor < 4) {
					Object.keys(actionData).forEach(calculateResistance);
					getAttrs(['playbook', 'notes', 'changed_attributes'], v => {
						if (v.playbook.toLowerCase() === 'leech') {
							fillRepeatingSectionFromData('alchemical', alchemicalData);
						}
						if (v.changed_attributes) {
							const changedAttrs = v.changed_attributes.split(',');
							actionsFlat.forEach(action => {
								if (changedAttrs.some(x => x.indexOf(action) === 0)) {
									changedAttrs.push(action);
								}
							});
							setAttr('changed_attributes', [...new Set(changedAttrs)].join(','));
						}
						setAttr('crew_notes', v.notes || '');
						upgradeSheet('2.4');
					});
				}
			},
			initialiseSheet = () => {
				const setting = ['ability', 'friend', 'crewability', 'contact', 'playbookitem', 'upgrade', 'framefeature']
					.reduce((memo, sectionName) => {
						memo[`repeating_${sectionName}_${generateRowID()}_autogen`] = 1;
						return memo;
					}, {});
				mySetAttrs(setting);
				fillRepeatingSectionFromData('item', itemData);
				/* Set translated default values */
				getAttrs(Object.keys(translatedDefaults), v => {
					const setting = {};
					Object.keys(translatedDefaults).forEach(k => {
						if (v[k] !== translatedDefaults[k]) setting[k] = translatedDefaults[k];
					});
					mySetAttrs(setting);
				});
				console.log('Initialising new sheet.');
			};
		if (v.version) upgradeSheet(v.version);
		else initialiseSheet();
		// Set version number
		mySetAttrs({
			version: sheetVersion,
			character_sheet: `Sea of Dead Men v${sheetVersion}`
		});
	});
});
</script>