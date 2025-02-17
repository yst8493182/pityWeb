import {Col, Row} from "antd";
import React from "react";
import {connect} from "umi";
import TestCaseConstructor from "@/components/TestCase/Constructor/TestCaseConstructor";
import CopyTreeSelect from "@/components/TestCase/Constructor/ConstructorCopy";

const TestCaseConstructorData = ({caseId, construct, dispatch, form, onFinish}) => {

  const {testcaseData, testCaseConstructorData, constructorType} = construct;

  return (
    <Row style={{marginTop: 24}} gutter={[8, 8]}>
      <Col span={24}>
        <CopyTreeSelect />
        <Row style={{marginTop: 16}}>
          <Col span={24}>
            <Row>
              <Col span={3}/>
              <Col span={18}>
                <TestCaseConstructor data={testCaseConstructorData} dispatch={dispatch} testcaseData={testcaseData}
                                     constructorType={constructorType} form={form}/>
              </Col>
              <Col span={3}/>
            </Row>

          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default connect(({construct, loading}) => ({
  construct,
  loading,
}))(TestCaseConstructorData)
