use candid::candid_method;
use ic_cdk::{query, update};
use ic_cdk_macros::{init, query as ic_query, update as ic_update};
use serde::{Deserialize, Serialize};

#[derive(candid::CandidType, Deserialize, Serialize, Clone)]
pub struct LandingPageContent {
    pub title: String,
    pub subtitle: String,
    pub description: String,
}

static mut LANDING_PAGE_CONTENT: Option<LandingPageContent> = None;

#[init]
#[candid_method]
fn init() {
    unsafe {
        LANDING_PAGE_CONTENT = Some(LandingPageContent {
            title: "Welcome to My ICP Landing Page!".to_string(),
            subtitle: "Decentralized and Secure".to_string(),
            description: "This landing page is powered by a Rust backend canister on the Internet Computer and a ReactJS frontend.".to_string(),
        });
    }
}

#[ic_update]
#[candid_method]
fn update_landing_content(new_content: LandingPageContent) -> LandingPageContent {
    unsafe {
        LANDING_PAGE_CONTENT = Some(new_content.clone());
        new_content
    }
}

#[ic_query]
#[candid_method]
fn get_landing_content() -> LandingPageContent {
    unsafe {
        LANDING_PAGE_CONTENT
            .clone()
            .unwrap_or_else(|| LandingPageContent {
                title: "Default Title".to_string(),
                subtitle: "Default Subtitle".to_string(),
                description: "Default Description.".to_string(),
            })
    }
}

ic_cdk::export_candid!();
