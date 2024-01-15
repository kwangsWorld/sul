package com.sul.app.notice.vo;

import lombok.Data;

@Data
public class NoticeVo {
	
	private String noticeNo;
	private String adminNo;
	private String adminName;
	private String title;
	private String content;
	private String inquiry;
	private String enrollDate;
	private String updateDate;
	private String delYn;

}
