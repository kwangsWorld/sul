package com.sul.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.notice.vo.NoticeVo;

@Repository
public class AdminNoticeDao {

	// 공지사항 목록 조회
	public List<NoticeVo> list(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("AdminNoticeMapper.list");
	}
	
	// 공자시항 상세 조회
	public NoticeVo detail(SqlSessionTemplate sqlSessionTemplate, String no) {
		return sqlSessionTemplate.selectOne("AdminNoticeMapper.detail" , no);
	}
	
	// 공지사항 작성
	public int write(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.insert("AdminNoticeMapper.write", vo);
	}
	
	// 공지사항 수정
	public int edit(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.update("AdminNoticeMapper.edit", vo);
	}
	
	// 공지사항 삭제
	public int delete(SqlSessionTemplate sqlSessionTemplate, String no) {
		return sqlSessionTemplate.update("AdminNoticeMapper.delete", no);
	}
	
}
